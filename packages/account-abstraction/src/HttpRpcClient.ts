import { JsonRpcProvider } from '@ethersproject/providers'
import { ethers } from 'ethers'
import { hexValue, resolveProperties } from 'ethers/lib/utils'

import { UserOperation } from '@biconomy-sdk/core-types'
import { HttpMethod, sendRequest } from './utils/httpRequests'
export class HttpRpcClient {
  private readonly userOpJsonRpcProvider: JsonRpcProvider
  chainId: number;

  constructor (
    readonly bundlerUrl: string,
    readonly entryPointAddress: string,
    chainId: number
  ) {
    this.userOpJsonRpcProvider = new ethers.providers.JsonRpcProvider(this.bundlerUrl, {
      name: 'Not actually connected to network, only talking to the Bundler!',
      chainId
    })
    this.chainId = chainId;
  }

  // TODO : add version of HttpRpcClient || interface in RPC relayer to sendSCWTransactionToRelayer

  async sendUserOpToBundler (userOp1: UserOperation): Promise<any> {
    const userOp = await resolveProperties(userOp1)
    const hexifiedUserOp: any =
      Object.keys(userOp)
        .map(key => {
          let val = (userOp as any)[key]
          if (typeof val !== 'string' || !val.startsWith('0x')) {
            val = hexValue(val)
          }
          return [key, val]
        })
        .reduce((set, [k, v]) => ({ ...set, [k]: v }), {})

    const jsonRequestData: [UserOperation, string] = [hexifiedUserOp, this.entryPointAddress]
    await this.printUserOperation(jsonRequestData)
    return await this.userOpJsonRpcProvider
      .send('eth_sendUserOperation', [hexifiedUserOp, this.entryPointAddress, this.chainId])
  }

  private async printUserOperation ([userOp1, entryPointAddress]: [UserOperation, string]): Promise<void> {
    const userOp = await resolveProperties(userOp1)
    console.log('sending eth_sendUserOperation', {
      ...userOp,
      initCode: (userOp.initCode ?? '').length,
      callData: (userOp.callData ?? '').length
    }, entryPointAddress)
  }
}

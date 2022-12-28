/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type UserOperationStruct = {
  sender: string;
  nonce: BigNumberish;
  initCode: BytesLike;
  callData: BytesLike;
  callGasLimit: BigNumberish;
  verificationGasLimit: BigNumberish;
  preVerificationGas: BigNumberish;
  maxFeePerGas: BigNumberish;
  maxPriorityFeePerGas: BigNumberish;
  paymasterAndData: BytesLike;
  signature: BytesLike;
};

export type UserOperationStructOutput = [
  string,
  BigNumber,
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string
] & {
  sender: string;
  nonce: BigNumber;
  initCode: string;
  callData: string;
  callGasLimit: BigNumber;
  verificationGasLimit: BigNumber;
  preVerificationGas: BigNumber;
  maxFeePerGas: BigNumber;
  maxPriorityFeePerGas: BigNumber;
  paymasterAndData: string;
  signature: string;
};

export declare namespace IStakeManager {
  export type DepositInfoStruct = {
    deposit: BigNumberish;
    staked: boolean;
    stake: BigNumberish;
    unstakeDelaySec: BigNumberish;
    withdrawTime: BigNumberish;
  };

  export type DepositInfoStructOutput = [
    BigNumber,
    boolean,
    BigNumber,
    number,
    BigNumber
  ] & {
    deposit: BigNumber;
    staked: boolean;
    stake: BigNumber;
    unstakeDelaySec: number;
    withdrawTime: BigNumber;
  };
}

export declare namespace IEntryPoint {
  export type UserOpsPerAggregatorStruct = {
    userOps: UserOperationStruct[];
    aggregator: string;
    signature: BytesLike;
  };

  export type UserOpsPerAggregatorStructOutput = [
    UserOperationStructOutput[],
    string,
    string
  ] & {
    userOps: UserOperationStructOutput[];
    aggregator: string;
    signature: string;
  };
}

export interface IEntryPointInterface extends utils.Interface {
  contractName: "IEntryPoint";
  functions: {
    "addStake(uint32)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "depositTo(address)": FunctionFragment;
    "getDepositInfo(address)": FunctionFragment;
    "getRequestId((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes))": FunctionFragment;
    "getSenderAddress(bytes)": FunctionFragment;
    "getSenderStorage(address)": FunctionFragment;
    "handleAggregatedOps(((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],address,bytes)[],address)": FunctionFragment;
    "handleOps((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],address)": FunctionFragment;
    "paymasterStake()": FunctionFragment;
    "simulateValidation((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bool)": FunctionFragment;
    "unlockStake()": FunctionFragment;
    "unstakeDelaySec()": FunctionFragment;
    "withdrawStake(address)": FunctionFragment;
    "withdrawTo(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addStake",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "depositTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getDepositInfo",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestId",
    values: [UserOperationStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getSenderAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSenderStorage",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "handleAggregatedOps",
    values: [IEntryPoint.UserOpsPerAggregatorStruct[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "handleOps",
    values: [UserOperationStruct[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "paymasterStake",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "simulateValidation",
    values: [UserOperationStruct, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockStake",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeDelaySec",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawStake",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawTo",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addStake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDepositInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSenderAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSenderStorage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handleAggregatedOps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "handleOps", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "paymasterStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "simulateValidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unlockStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unstakeDelaySec",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdrawTo", data: BytesLike): Result;

  events: {
    "Deposited(address,uint256)": EventFragment;
    "StakeLocked(address,uint256,uint256)": EventFragment;
    "StakeUnlocked(address,uint256)": EventFragment;
    "StakeWithdrawn(address,address,uint256)": EventFragment;
    "UserOperationEvent(bytes32,address,address,uint256,uint256,uint256,bool)": EventFragment;
    "UserOperationRevertReason(bytes32,address,uint256,bytes)": EventFragment;
    "Withdrawn(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StakeLocked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StakeUnlocked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StakeWithdrawn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserOperationEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserOperationRevertReason"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export type DepositedEvent = TypedEvent<
  [string, BigNumber],
  { account: string; totalDeposit: BigNumber }
>;

export type DepositedEventFilter = TypedEventFilter<DepositedEvent>;

export type StakeLockedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { account: string; totalStaked: BigNumber; withdrawTime: BigNumber }
>;

export type StakeLockedEventFilter = TypedEventFilter<StakeLockedEvent>;

export type StakeUnlockedEvent = TypedEvent<
  [string, BigNumber],
  { account: string; withdrawTime: BigNumber }
>;

export type StakeUnlockedEventFilter = TypedEventFilter<StakeUnlockedEvent>;

export type StakeWithdrawnEvent = TypedEvent<
  [string, string, BigNumber],
  { account: string; withdrawAddress: string; amount: BigNumber }
>;

export type StakeWithdrawnEventFilter = TypedEventFilter<StakeWithdrawnEvent>;

export type UserOperationEventEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber, boolean],
  {
    requestId: string;
    sender: string;
    paymaster: string;
    nonce: BigNumber;
    actualGasCost: BigNumber;
    actualGasPrice: BigNumber;
    success: boolean;
  }
>;

export type UserOperationEventEventFilter =
  TypedEventFilter<UserOperationEventEvent>;

export type UserOperationRevertReasonEvent = TypedEvent<
  [string, string, BigNumber, string],
  { requestId: string; sender: string; nonce: BigNumber; revertReason: string }
>;

export type UserOperationRevertReasonEventFilter =
  TypedEventFilter<UserOperationRevertReasonEvent>;

export type WithdrawnEvent = TypedEvent<
  [string, string, BigNumber],
  { account: string; withdrawAddress: string; amount: BigNumber }
>;

export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;

export interface IEntryPoint extends BaseContract {
  contractName: "IEntryPoint";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IEntryPointInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addStake(
      _unstakeDelaySec: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    depositTo(
      account: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getDepositInfo(
      account: string,
      overrides?: CallOverrides
    ): Promise<
      [IStakeManager.DepositInfoStructOutput] & {
        info: IStakeManager.DepositInfoStructOutput;
      }
    >;

    getRequestId(
      userOp: UserOperationStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getSenderAddress(
      initCode: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getSenderStorage(
      sender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { senderStorageCells: BigNumber[] }>;

    handleAggregatedOps(
      opsPerAggregator: IEntryPoint.UserOpsPerAggregatorStruct[],
      beneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    handleOps(
      ops: UserOperationStruct[],
      beneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paymasterStake(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    simulateValidation(
      userOp: UserOperationStruct,
      offChainSigCheck: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unlockStake(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstakeDelaySec(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawStake(
      withdrawAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawTo(
      withdrawAddress: string,
      withdrawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addStake(
    _unstakeDelaySec: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  depositTo(
    account: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getDepositInfo(
    account: string,
    overrides?: CallOverrides
  ): Promise<IStakeManager.DepositInfoStructOutput>;

  getRequestId(
    userOp: UserOperationStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  getSenderAddress(
    initCode: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getSenderStorage(
    sender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  handleAggregatedOps(
    opsPerAggregator: IEntryPoint.UserOpsPerAggregatorStruct[],
    beneficiary: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  handleOps(
    ops: UserOperationStruct[],
    beneficiary: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paymasterStake(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  simulateValidation(
    userOp: UserOperationStruct,
    offChainSigCheck: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unlockStake(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstakeDelaySec(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawStake(
    withdrawAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawTo(
    withdrawAddress: string,
    withdrawAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addStake(
      _unstakeDelaySec: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    depositTo(account: string, overrides?: CallOverrides): Promise<void>;

    getDepositInfo(
      account: string,
      overrides?: CallOverrides
    ): Promise<IStakeManager.DepositInfoStructOutput>;

    getRequestId(
      userOp: UserOperationStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    getSenderAddress(
      initCode: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getSenderStorage(
      sender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    handleAggregatedOps(
      opsPerAggregator: IEntryPoint.UserOpsPerAggregatorStruct[],
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<void>;

    handleOps(
      ops: UserOperationStruct[],
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<void>;

    paymasterStake(overrides?: CallOverrides): Promise<BigNumber>;

    simulateValidation(
      userOp: UserOperationStruct,
      offChainSigCheck: boolean,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string, string, string] & {
        preOpGas: BigNumber;
        prefund: BigNumber;
        actualAggregator: string;
        sigForUserOp: string;
        sigForAggregation: string;
        offChainSigInfo: string;
      }
    >;

    unlockStake(overrides?: CallOverrides): Promise<void>;

    unstakeDelaySec(overrides?: CallOverrides): Promise<number>;

    withdrawStake(
      withdrawAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawTo(
      withdrawAddress: string,
      withdrawAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Deposited(address,uint256)"(
      account?: string | null,
      totalDeposit?: null
    ): DepositedEventFilter;
    Deposited(
      account?: string | null,
      totalDeposit?: null
    ): DepositedEventFilter;

    "StakeLocked(address,uint256,uint256)"(
      account?: string | null,
      totalStaked?: null,
      withdrawTime?: null
    ): StakeLockedEventFilter;
    StakeLocked(
      account?: string | null,
      totalStaked?: null,
      withdrawTime?: null
    ): StakeLockedEventFilter;

    "StakeUnlocked(address,uint256)"(
      account?: string | null,
      withdrawTime?: null
    ): StakeUnlockedEventFilter;
    StakeUnlocked(
      account?: string | null,
      withdrawTime?: null
    ): StakeUnlockedEventFilter;

    "StakeWithdrawn(address,address,uint256)"(
      account?: string | null,
      withdrawAddress?: null,
      amount?: null
    ): StakeWithdrawnEventFilter;
    StakeWithdrawn(
      account?: string | null,
      withdrawAddress?: null,
      amount?: null
    ): StakeWithdrawnEventFilter;

    "UserOperationEvent(bytes32,address,address,uint256,uint256,uint256,bool)"(
      requestId?: BytesLike | null,
      sender?: string | null,
      paymaster?: string | null,
      nonce?: null,
      actualGasCost?: null,
      actualGasPrice?: null,
      success?: null
    ): UserOperationEventEventFilter;
    UserOperationEvent(
      requestId?: BytesLike | null,
      sender?: string | null,
      paymaster?: string | null,
      nonce?: null,
      actualGasCost?: null,
      actualGasPrice?: null,
      success?: null
    ): UserOperationEventEventFilter;

    "UserOperationRevertReason(bytes32,address,uint256,bytes)"(
      requestId?: BytesLike | null,
      sender?: string | null,
      nonce?: null,
      revertReason?: null
    ): UserOperationRevertReasonEventFilter;
    UserOperationRevertReason(
      requestId?: BytesLike | null,
      sender?: string | null,
      nonce?: null,
      revertReason?: null
    ): UserOperationRevertReasonEventFilter;

    "Withdrawn(address,address,uint256)"(
      account?: string | null,
      withdrawAddress?: null,
      amount?: null
    ): WithdrawnEventFilter;
    Withdrawn(
      account?: string | null,
      withdrawAddress?: null,
      amount?: null
    ): WithdrawnEventFilter;
  };

  estimateGas: {
    addStake(
      _unstakeDelaySec: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    depositTo(
      account: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getDepositInfo(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequestId(
      userOp: UserOperationStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSenderAddress(
      initCode: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getSenderStorage(
      sender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    handleAggregatedOps(
      opsPerAggregator: IEntryPoint.UserOpsPerAggregatorStruct[],
      beneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    handleOps(
      ops: UserOperationStruct[],
      beneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paymasterStake(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    simulateValidation(
      userOp: UserOperationStruct,
      offChainSigCheck: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unlockStake(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstakeDelaySec(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawStake(
      withdrawAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawTo(
      withdrawAddress: string,
      withdrawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addStake(
      _unstakeDelaySec: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    depositTo(
      account: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getDepositInfo(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRequestId(
      userOp: UserOperationStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSenderAddress(
      initCode: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getSenderStorage(
      sender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    handleAggregatedOps(
      opsPerAggregator: IEntryPoint.UserOpsPerAggregatorStruct[],
      beneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    handleOps(
      ops: UserOperationStruct[],
      beneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paymasterStake(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    simulateValidation(
      userOp: UserOperationStruct,
      offChainSigCheck: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unlockStake(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstakeDelaySec(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawStake(
      withdrawAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawTo(
      withdrawAddress: string,
      withdrawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

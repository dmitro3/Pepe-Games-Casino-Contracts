/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface VRFConsumerBaseV2Interface extends ethers.utils.Interface {
  functions: {
    "rawFulfillRandomWords(uint256,uint256[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "rawFulfillRandomWords",
    values: [BigNumberish, BigNumberish[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "rawFulfillRandomWords",
    data: BytesLike
  ): Result;

  events: {};
}

export class VRFConsumerBaseV2 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: VRFConsumerBaseV2Interface;

  functions: {
    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "rawFulfillRandomWords(uint256,uint256[])"(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  rawFulfillRandomWords(
    requestId: BigNumberish,
    randomWords: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "rawFulfillRandomWords(uint256,uint256[])"(
    requestId: BigNumberish,
    randomWords: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "rawFulfillRandomWords(uint256,uint256[])"(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "rawFulfillRandomWords(uint256,uint256[])"(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "rawFulfillRandomWords(uint256,uint256[])"(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DiceV4 } from "../DiceV4";

export class DiceV4__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    subscriptionId: BigNumberish,
    bankAddress: string,
    overrides?: Overrides
  ): Promise<DiceV4> {
    return super.deploy(
      subscriptionId,
      bankAddress,
      overrides || {}
    ) as Promise<DiceV4>;
  }
  getDeployTransaction(
    subscriptionId: BigNumberish,
    bankAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      subscriptionId,
      bankAddress,
      overrides || {}
    );
  }
  attach(address: string): DiceV4 {
    return super.attach(address) as DiceV4;
  }
  connect(signer: Signer): DiceV4__factory {
    return super.connect(signer) as DiceV4__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DiceV4 {
    return new Contract(address, _abi, signerOrProvider) as DiceV4;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "bankAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessDenied",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "minCap",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "maxCap",
        type: "uint8",
      },
    ],
    name: "CapNotInRange",
    type: "error",
  },
  {
    inputs: [],
    name: "ExcessiveHouseEdge",
    type: "error",
  },
  {
    inputs: [],
    name: "ForbiddenToken",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "NotFulfilled",
    type: "error",
  },
  {
    inputs: [],
    name: "NotPendingBet",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "have",
        type: "address",
      },
      {
        internalType: "address",
        name: "want",
        type: "address",
      },
    ],
    name: "OnlyCoordinatorCanFulfill",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenHasPendingBets",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minBetAmount",
        type: "uint256",
      },
    ],
    name: "UnderMinBetAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongGasValueToCoverFee",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "chainlinkVRFCost",
        type: "uint256",
      },
    ],
    name: "BetRefunded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "cap",
        type: "uint8",
      },
    ],
    name: "PlaceBet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "cap",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "rolled",
        type: "uint8",
      },
    ],
    name: "Roll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "bank",
        type: "address",
      },
    ],
    name: "SetBank",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "houseEdge",
        type: "uint16",
      },
    ],
    name: "SetHouseEdge",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "bank",
    outputs: [
      {
        internalType: "contract IBankV2",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bets",
    outputs: [
      {
        internalType: "bool",
        name: "resolved",
        type: "bool",
      },
      {
        internalType: "address payable",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "betStatus",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "diceBets",
    outputs: [
      {
        internalType: "uint8",
        name: "cap",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "rolled",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getBetData",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "resolved",
            type: "bool",
          },
          {
            internalType: "address payable",
            name: "user",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blockTime",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "betStatus",
            type: "bool",
          },
        ],
        internalType: "struct DiceV4.Bet",
        name: "betData",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getBetStatus",
    outputs: [
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "dataLength",
        type: "uint256",
      },
    ],
    name: "getLastUserBets",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "bool",
                name: "resolved",
                type: "bool",
              },
              {
                internalType: "address payable",
                name: "user",
                type: "address",
              },
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "blockTime",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "betStatus",
                type: "bool",
              },
            ],
            internalType: "struct DiceV4.Bet",
            name: "bet",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "cap",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "rolled",
                type: "uint8",
              },
            ],
            internalType: "struct DiceV4.DiceBet",
            name: "diceBet",
            type: "tuple",
          },
        ],
        internalType: "struct DiceV4.FullDiceBet[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getTokenBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "hasPendingBets",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "multiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "refundBet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "s_owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "s_randomWords",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "s_requestId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IBankV2",
        name: "_bank",
        type: "address",
      },
    ],
    name: "setBank",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "houseEdge",
        type: "uint16",
      },
    ],
    name: "setHouseEdge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tokens",
    outputs: [
      {
        internalType: "uint16",
        name: "houseEdge",
        type: "uint16",
      },
      {
        internalType: "uint64",
        name: "pendingCount",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "updateMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "cap",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "wager",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a0604052600380546001600160a01b03191673bd13f08b8352a3635218ab9418e340c60d6eb4181781557f121a143066e0f2f08b620784af77cccb35c6242460b4a8ee251b4b416abaebd4600455600580546602000300030d406001600160501b0319909116179055600f553480156200007957600080fd5b50604051620025d9380380620025d98339810160408190526200009c916200023f565b6003546001600160a01b0316608052620000b63362000130565b6000805460ff60a01b19169055600180556003546002805460088054336001600160a01b03199091161790556001600160e01b0319166001600160a01b0390921668010000000000000000026001600160401b031916919091176001600160401b038416179055620001288162000180565b505062000294565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6200018a620001de565b600980546001600160a01b0319166001600160a01b0383169081179091556040519081527f10f5824683d64a0712038f2244e046b174a1cc57fbb8556bfda5ffb2612440679060200160405180910390a150565b6000546001600160a01b031633146200023d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b565b600080604083850312156200025357600080fd5b82516001600160401b03811681146200026b57600080fd5b60208401519092506001600160a01b03811681146200028957600080fd5b809150509250929050565b608051612322620002b76000396000818161067701526106b901526123226000f3fe6080604052600436106101815760003560e01c806361f14f11116100d1578063ac9650d81161008a578063e397824011610064578063e397824014610556578063e486033914610576578063e89e106a146105da578063f2fde38b146105f057600080fd5b8063ac9650d8146104dc578063c2fb579f14610509578063e1fdb4b41461053657600080fd5b806361f14f1114610409578063715018a61461043c57806376cdb03b1461045157806378bcde22146104895780638456cb59146104a95780638da5cb5b146104be57600080fd5b80633aecd0e31161013e578063594043fd11610118578063594043fd146103465780635bfe16301461039d5780635c975abb146103ca5780635ffe6146146103e957600080fd5b80633aecd0e3146102c05780634031e85b146102e057806342258eca146102f357600080fd5b8063090d23b91461018657806312065fe0146101a85780631b3ed722146101ca5780631d3c7b91146101e05780631fe543e3146101f657806322af00fa14610216575b600080fd5b34801561019257600080fd5b506101a66101a1366004611d26565b610610565b005b3480156101b457600080fd5b50475b6040519081526020015b60405180910390f35b3480156101d657600080fd5b506101b7600f5481565b3480156101ec57600080fd5b506101b760065481565b34801561020257600080fd5b506101a6610211366004611d59565b61066c565b34801561022257600080fd5b5061027b610231366004611e22565b600a6020526000908152604090208054600182015460028301546003840154600485015460059095015460ff808616966101009096046001600160a01b0390811696951694911687565b6040805197151588526001600160a01b03968716602089015294909516938601939093526060850191909152608084015260a0830152151560c082015260e0016101c1565b3480156102cc57600080fd5b506101b76102db366004611d26565b6106f9565b6101a66102ee366004611e3b565b610781565b3480156102ff57600080fd5b5061032c61030e366004611e22565b600c6020526000908152604090205460ff8082169161010090041682565b6040805160ff9384168152929091166020830152016101c1565b34801561035257600080fd5b5061038d610361366004611d26565b6001600160a01b03166000908152600e60205260409020546201000090046001600160401b0316151590565b60405190151581526020016101c1565b3480156103a957600080fd5b506103bd6103b8366004611e22565b610867565b6040516101c19190611ed8565b3480156103d657600080fd5b50600054600160a01b900460ff1661038d565b3480156103f557600080fd5b506101a6610404366004611e22565b6108e6565b34801561041557600080fd5b5061038d610424366004611e22565b6000908152600a602052604090206005015460ff1690565b34801561044857600080fd5b506101a66108f3565b34801561045d57600080fd5b50600954610471906001600160a01b031681565b6040516001600160a01b0390911681526020016101c1565b34801561049557600080fd5b506101a66104a4366004611ee6565b610907565b3480156104b557600080fd5b506101a66109de565b3480156104ca57600080fd5b506000546001600160a01b0316610471565b3480156104e857600080fd5b506104fc6104f7366004611f26565b610a08565b6040516101c19190611ff2565b34801561051557600080fd5b50610529610524366004612054565b610afd565b6040516101c19190612080565b34801561054257600080fd5b506101a6610551366004611e22565b610c2c565b34801561056257600080fd5b50600854610471906001600160a01b031681565b34801561058257600080fd5b506105b8610591366004611d26565b600e6020526000908152604090205461ffff8116906201000090046001600160401b031682565b6040805161ffff90931683526001600160401b039091166020830152016101c1565b3480156105e657600080fd5b506101b760075481565b3480156105fc57600080fd5b506101a661060b366004611d26565b610d93565b610618610e09565b600980546001600160a01b0319166001600160a01b0383169081179091556040519081527f10f5824683d64a0712038f2244e046b174a1cc57fbb8556bfda5ffb2612440679060200160405180910390a150565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106eb5760405163073e64fd60e21b81523360048201526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660248201526044015b60405180910390fd5b6106f58282610e63565b5050565b6000806001600160a01b03831661071257504792915050565b6040516370a0823160e01b81523060048201526001600160a01b038416906370a0823190602401602060405180830381865afa158015610756573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077a91906120de565b9392505050565b610789611056565b60ff8316158061079c575060638360ff16115b156107c457604051638a4b39a760e01b815260016004820152606360248201526044016106e2565b60006107dc83836107d7612710886110a3565b6110c8565b606081810180516000908152600c6020908152604091829020805460ff191660ff8b16908117909155828601518287015194516080880151855191825293810193909352928201529394506001600160a01b03908116939116917f7bc15b06f5a3547b8fc8eb36e2c45f4b3385d615fba6158c797e5aa279dcf748910160405180910390a350505050565b61086f611c95565b506000908152600a6020908152604091829020825160e081018452815460ff808216151583526001600160a01b03610100909204821694830194909452600183015416938101939093526002810154606084015260038101546080840152600481015460a08401526005015416151560c082015290565b6108ee610e09565b600f55565b6108fb610e09565b610905600061155b565b565b61090f610e09565b6101908161ffff16111561093657604051631c2d5dd360e21b815260040160405180910390fd5b6001600160a01b0382166000908152600e60205260409020546201000090046001600160401b03161561097c5760405163055212b760e51b815260040160405180910390fd5b6001600160a01b0382166000818152600e6020908152604091829020805461ffff191661ffff861690811790915591519182527f7dfd3ecb8ac83242184c019f85ca408558f2ac0a5a19af6be2a4aee697eac812910160405180910390a25050565b6109e6610e09565b600054600160a01b900460ff1615610a00576109056115ab565b610905611600565b6060816001600160401b03811115610a2257610a22611d43565b604051908082528060200260200182016040528015610a5557816020015b6060815260200190600190039081610a405790505b50905060005b82811015610af557610ac530858584818110610a7957610a796120f7565b9050602002810190610a8b919061210d565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061164392505050565b828281518110610ad757610ad76120f7565b60200260200101819052508080610aed90612170565b915050610a5b565b505b92915050565b60606000610b0b8484611668565b9050600081516001600160401b03811115610b2857610b28611d43565b604051908082528060200260200182016040528015610b6157816020015b610b4e611cd1565b815260200190600190039081610b465790505b50905060005b8251811015610c23576040518060400160405280848381518110610b8d57610b8d6120f7565b60200260200101518152602001600c6000868581518110610bb057610bb06120f7565b60209081029190910181015160600151825281810192909252604090810160002081518083019092525460ff8082168352610100909104169181019190915290528251839083908110610c0557610c056120f7565b60200260200101819052508080610c1b90612170565b915050610b67565b50949350505050565b610c3461183a565b6000818152600a60205260409020805460ff16151560011415610c6a576040516310d5f2bd60e11b815260040160405180910390fd5b6004810154610c7a90601e61218b565b421015610c9a576040516303de361f60e11b815260040160405180910390fd5b60018101546001600160a01b03166000908152600e6020526040902080546201000090046001600160401b0316816002610cd3836121a3565b82546001600160401b039182166101009390930a928302919092021990911617905550815460ff1916600190811783558201546001600160a01b0316610d5a57815460038301546040516101009092046001600160a01b0316916108fc82150291906000818181858888f19350505050158015610d54573d6000803e3d6000fd5b50610d85565b815460038301546001840154610d85926001600160a01b039182169261010090910490911690611894565b5050610d9060018055565b50565b610d9b610e09565b6001600160a01b038116610e005760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016106e2565b610d908161155b565b6000546001600160a01b031633146109055760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106e2565b6000828152600c60209081526040808320600a909252822083519192909160649085908390610e9457610e946120f7565b6020026020010151610ea691906121dc565b610eb190600161218b565b835460ff808316610100810261ff00198416811788559394509281169116171015610fc3578154600160ff1991821681178085556005850180549093168217909255830154600384015485546001600160a01b0392831693610100900490921691600090610f2390839060ff166110a3565b9050806000610f3286856118fc565b90506000610f4082846121f0565b600954604051631f61502360e01b81526001600160a01b0389811660048301528a811660248301526044820184905260648201869052929350911690631f61502390608401600060405180830381600087803b158015610f9f57600080fd5b505af1158015610fb3573d6000803e3d6000fd5b5050505050505050505050610fdc565b815460ff19908116600117835560058301805490911690555b6001820154825460028401546003850154865460408051938452602084019290925260ff9081168383015285166060830152516001600160a01b0393841693610100909304909216917f9b488c9d2f317852722d0866bc6acda97e4e9de6b986918e8a7143cd697437e19181900360800190a35050505050565b600054600160a01b900460ff16156109055760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016106e2565b60006110b0826064612207565b60ff166110be84606461222a565b61077a9190612249565b6110d0611c95565b6110d8611056565b6110e061183a565b6001600160a01b038481166000818152600e602052604090819020600954915163cbe230c360e01b8152600481019390935292169063cbe230c390602401602060405180830381865afa15801561113b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061115f919061225d565b158061116e5750805461ffff16155b1561118c5760405163c455905560e01b815260040160405180910390fd5b60095460405163f6b2a2f160e01b81526001600160a01b038781166004830181905233939015928892600092169063f6b2a2f190602401602060405180830381865afa1580156111e0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061120491906120de565b905080821015611229576040516289563d60e21b8152600481018290526024016106e2565b6009546040516313c59cef60e11b81526001600160a01b038b81166004830152602482018a9052600092169063278b39de90604401602060405180830381865afa15801561127b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061129f91906120de565b9050808311156112f45783156112f0576001600160a01b0385166108fc6112c683866121f0565b6040518115909202916000818181858888f193505050501580156112ee573d6000803e3d6000fd5b505b8092505b5050600254600480546005546040516305d3b1d360e41b8152928301919091526001600160401b0383166024830152640100000000810461ffff16604483015263ffffffff80821660648401526601000000000000909104166084820152680100000000000000009091046001600160a01b031690635d3b1d309060a4016020604051808303816000875af1158015611391573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113b591906120de565b60078190555060006040518060e00160405280600015158152602001856001600160a01b031681526020018a6001600160a01b031681526020016007548152602001838152602001438152602001600015158152509050600b6000856001600160a01b03166001600160a01b03168152602001908152602001600020600754908060018154018082558091505060019003906000526020600020016000909190919091505580600a6000600754815260200190815260200160002060008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a8154816001600160a01b0302191690836001600160a01b0316021790555060408201518160010160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550606082015181600201556080820151816003015560a0820151816004015560c08201518160050160006101000a81548160ff0219169083151502179055509050508261154c5760095461154c906001600160a01b038b81169187911685611928565b94505050505061077a60018055565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6115b3611966565b6000805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b611608611056565b6000805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586115e33390565b606061077a83836040518060600160405280602781526020016122c6602791396119b6565b6001600160a01b0382166000908152600b602090815260408083208054825181850281018501909352808352606094938301828280156116c757602002820191906000526020600020905b8154815260200190600101908083116116b3575b50508351939450505050838110156116dd578093505b6000846001600160401b038111156116f7576116f7611d43565b60405190808252806020026020018201604052801561173057816020015b61171d611c95565b8152602001906001900390816117155790505b5090508415611831576000825b61174787856121f0565b81111561182e57600a60008661175e6001856121f0565b8151811061176e5761176e6120f7565b6020908102919091018101518252818101929092526040908101600020815160e081018352815460ff808216151583526001600160a01b03610100909204821695830195909552600183015416928101929092526002810154606083015260038101546080830152600481015460a083015260050154909116151560c08201528351849084908110611802576118026120f7565b6020026020010181905250818061181890612170565b92505080806118269061227f565b91505061173d565b50505b95945050505050565b6002600154141561188d5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016106e2565b6002600155565b6040516001600160a01b0383166024820152604481018290526118f790849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611a2e565b505050565b6001600160a01b0382166000908152600e6020526040812054612710906110be90849061ffff1661222a565b6040516001600160a01b03808516602483015283166044820152606481018290526119609085906323b872dd60e01b906084016118c0565b50505050565b600054600160a01b900460ff166109055760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016106e2565b6060600080856001600160a01b0316856040516119d39190612296565b600060405180830381855af49150503d8060008114611a0e576040519150601f19603f3d011682016040523d82523d6000602084013e611a13565b606091505b5091509150611a2486838387611b03565b9695505050505050565b6000611a83826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611b819092919063ffffffff16565b9050805160001480611aa4575080806020019051810190611aa4919061225d565b6118f75760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016106e2565b60608315611b6f578251611b68576001600160a01b0385163b611b685760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106e2565b5081611b79565b611b798383611b90565b949350505050565b6060611b798484600085611bba565b815115611ba05781518083602001fd5b8060405162461bcd60e51b81526004016106e291906122b2565b606082471015611c1b5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016106e2565b600080866001600160a01b03168587604051611c379190612296565b60006040518083038185875af1925050503d8060008114611c74576040519150601f19603f3d011682016040523d82523d6000602084013e611c79565b606091505b5091509150611c8a87838387611b03565b979650505050505050565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915290565b6040518060400160405280611ce4611c95565b8152602001611d0c6040518060400160405280600060ff168152602001600060ff1681525090565b905290565b6001600160a01b0381168114610d9057600080fd5b600060208284031215611d3857600080fd5b813561077a81611d11565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215611d6c57600080fd5b823591506020808401356001600160401b0380821115611d8b57600080fd5b818601915086601f830112611d9f57600080fd5b813581811115611db157611db1611d43565b8060051b604051601f19603f83011681018181108582111715611dd657611dd6611d43565b604052918252848201925083810185019189831115611df457600080fd5b938501935b82851015611e1257843584529385019392850192611df9565b8096505050505050509250929050565b600060208284031215611e3457600080fd5b5035919050565b600080600060608486031215611e5057600080fd5b833560ff81168114611e6157600080fd5b92506020840135611e7181611d11565b929592945050506040919091013590565b805115158252602081015160018060a01b0380821660208501528060408401511660408501525050606081015160608301526080810151608083015260a081015160a083015260c0810151151560c08301525050565b60e08101610af78284611e82565b60008060408385031215611ef957600080fd5b8235611f0481611d11565b9150602083013561ffff81168114611f1b57600080fd5b809150509250929050565b60008060208385031215611f3957600080fd5b82356001600160401b0380821115611f5057600080fd5b818501915085601f830112611f6457600080fd5b813581811115611f7357600080fd5b8660208260051b8501011115611f8857600080fd5b60209290920196919550909350505050565b60005b83811015611fb5578181015183820152602001611f9d565b838111156119605750506000910152565b60008151808452611fde816020860160208601611f9a565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561204757603f19888603018452612035858351611fc6565b94509285019290850190600101612019565b5092979650505050505050565b6000806040838503121561206757600080fd5b823561207281611d11565b946020939093013593505050565b6020808252825182820181905260009190848201906040850190845b8181101561182e5783516120b1848251611e82565b850151805160ff90811660e08601529086015116610100840152928401926101209092019160010161209c565b6000602082840312156120f057600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b6000808335601e1984360301811261212457600080fd5b8301803591506001600160401b0382111561213e57600080fd5b60200191503681900382131561215357600080fd5b9250929050565b634e487b7160e01b600052601160045260246000fd5b60006000198214156121845761218461215a565b5060010190565b6000821982111561219e5761219e61215a565b500190565b60006001600160401b038216806121bc576121bc61215a565b6000190192915050565b634e487b7160e01b600052601260045260246000fd5b6000826121eb576121eb6121c6565b500690565b6000828210156122025761220261215a565b500390565b600060ff821660ff8416808210156122215761222161215a565b90039392505050565b60008160001904831182151516156122445761224461215a565b500290565b600082612258576122586121c6565b500490565b60006020828403121561226f57600080fd5b8151801515811461077a57600080fd5b60008161228e5761228e61215a565b506000190190565b600082516122a8818460208701611f9a565b9190910192915050565b60208152600061077a6020830184611fc656fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122074db6cb60bcf2ffa7880d27923afffa101041fbfbf71683315dabf25d47ab95964736f6c634300080c0033";
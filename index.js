module.exports = {
  contractName: "WXRP",
  abi: [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [
        {
          name: "",
          type: "string"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [
        {
          name: "",
          type: "uint8"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "",
          type: "address"
        }
      ],
      name: "balanceOf",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [
        {
          name: "",
          type: "string"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "",
          type: "address"
        },
        {
          name: "",
          type: "address"
        }
      ],
      name: "allowance",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      payable: true,
      stateMutability: "payable",
      type: "fallback"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "src",
          type: "address"
        },
        {
          indexed: true,
          name: "guy",
          type: "address"
        },
        {
          indexed: false,
          name: "wad",
          type: "uint256"
        }
      ],
      name: "Approval",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "src",
          type: "address"
        },
        {
          indexed: true,
          name: "dst",
          type: "address"
        },
        {
          indexed: false,
          name: "wad",
          type: "uint256"
        }
      ],
      name: "Transfer",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "dst",
          type: "address"
        },
        {
          indexed: false,
          name: "wad",
          type: "uint256"
        }
      ],
      name: "Deposit",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "src",
          type: "address"
        },
        {
          indexed: false,
          name: "wad",
          type: "uint256"
        }
      ],
      name: "Withdrawal",
      type: "event"
    },
    {
      constant: false,
      inputs: [],
      name: "deposit",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "wad",
          type: "uint256"
        }
      ],
      name: "withdraw",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "guy",
          type: "address"
        },
        {
          name: "wad",
          type: "uint256"
        }
      ],
      name: "approve",
      outputs: [
        {
          name: "",
          type: "bool"
        }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "dst",
          type: "address"
        },
        {
          name: "wad",
          type: "uint256"
        }
      ],
      name: "transfer",
      outputs: [
        {
          name: "",
          type: "bool"
        }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "src",
          type: "address"
        },
        {
          name: "dst",
          type: "address"
        },
        {
          name: "wad",
          type: "uint256"
        }
      ],
      name: "transferFrom",
      outputs: [
        {
          name: "",
          type: "bool"
        }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    }
  ],
  networks: {
    "1440001": {
      events: {},
      links: {},
      address: "0x57dcC4332FA8Ef169fc0D19dc169267f02961ac9",
      transactionHash:
        "0x51f8c3f3f976b7a58345df6cd5961edee09afd3cf2794fe04fbdab9d66ce33c6sage."
    }
  },
  schemaVersion: "2.0.0",
  updatedAt: "2023-01-13T02:21:57Z"
};

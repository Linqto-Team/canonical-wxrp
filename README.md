# Wrapped XRP

Canonical WXRP package (based on [WETH](https://github.com/gnosis/canonical-weth))

## Usage

```sh
npm install --save truffle-contract @linqto-team/canonical-wxrp
```

and

```js
const contract = require('truffle-contract');
const wxrpArtifact = require('canonical-wxrp');

const wxrp = contract(wxrpArtifact);
```

## Deployed contract addresses

- XRPL EVM Devnet: [0x57dcC4332FA8Ef169fc0D19dc169267f02961ac9](https://evm-sidechain.xrpl.org/address/0x57dcC4332FA8Ef169fc0D19dc169267f02961ac9)
- Linqto Devnet: [0xa8e852E7bD61F2aF9fA95C9c7148FF4a9a68965C](https://explorer.linqto-dev.com/token/0xa8e852E7bD61F2aF9fA95C9c7148FF4a9a68965C/token-transfers)

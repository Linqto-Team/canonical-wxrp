# Canonical W-XRP

Canonical W-XRP package (based on [WETH9](https://github.com/gnosis/canonical-weth))

## Usage

```sh
npm install --save truffle-contract canonical-wxrp
```

and

```js
const contract = require('truffle-contract');
const wxrpArtifact = require('canonical-wxrp');

const wxrp = contract(wxrpArtifact);
```

## Deployed contract addresses

- Devnet: [0x57dcC4332FA8Ef169fc0D19dc169267f02961ac9](https://evm-sidechain.xrpl.org/address/0x57dcC4332FA8Ef169fc0D19dc169267f02961ac9)

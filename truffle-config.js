const { argv } = require("yargs");

module.exports = {
  networks: {
    mainnet: {
      devnet: "https://rpc-evm-sidechain.xrpl.org",
      network_id: "1440001"
    }
  },
  compilers: {
    solc: {
      version: argv.solcVersion
    }
  }
};

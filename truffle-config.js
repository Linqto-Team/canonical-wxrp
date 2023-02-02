const { argv } = require("yargs");

module.exports = {
  networks: {
    xrpl_devnet: {
      host: "https://rpc-evm-sidechain.xrpl.org",
      network_id: "1440001"
    },
    hardhat: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "31337"
    }
  },
  compilers: {
    solc: {
      version: argv.solcVersion
    }
  }
};

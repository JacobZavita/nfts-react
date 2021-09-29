require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_KEY,
      accounts: [process.env.PK],
    },
    mainnet: {
      chainId: 1,
      url: process.env.ALCHEMY_KEY,
      accounts: [process.env.PK],
    }
  },
};

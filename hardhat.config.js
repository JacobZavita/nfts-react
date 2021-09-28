require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/yV6wz1HgDHEWBfq4QmnUPuDMRxh1Hj3z',
      accounts: [process.env.PK],
    },
  },
};

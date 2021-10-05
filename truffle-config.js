module.exports = {
  networks: {
    local: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }, 

    ganache: {
      host: "localhost",
      port: 7545,
      network_id: "5777"
    }
  }
  // compilers: {
  //   solc: {
  //     version: "^0.8.9"
  //   }
  // }
};

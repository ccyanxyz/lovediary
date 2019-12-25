var HDWalletProvider = require("truffle-hdwallet-provider");
var fs = require("fs");

var mnemonic = fs.readFileSync("mnemonic.txt").toString();

module.exports = {
	networks: {
		development: {
			host: "127.0.0.1",
			port: 8545,
			network_id: "*",
		},
		ropsten: {
			provider: function() {
				return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/bda996b482e944bdbd5bad497e8f7205")
			},
			network_id: 3,
		}
	},
	compilers: {
		solc: {
			version: "0.4.24"
		}
	}
}

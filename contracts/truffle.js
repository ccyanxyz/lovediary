module.exports = {
	networks: {
		// add network configurations here
		development: {
			host: "127.0.0.1",
			port: 8545,
			network_id: "*",
		}
	},
	compilers: {
		solc: {
			version: "0.4.24"
		}
	}
}

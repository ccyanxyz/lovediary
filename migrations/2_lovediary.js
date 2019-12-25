const LoveDiaryStorage = artifacts.require("./LoveDiaryStorage.sol");
const LoveDiaryLogicV0 = artifacts.require("./LoveDiaryLogicV0.sol");

module.exports = function(deployer) {
  deployer.deploy(LoveDiaryLogicV0).then(() => {
	  return deployer.deploy(LoveDiaryStorage);
  }).then(() => {
	  console.log("Storage:", LoveDiaryStorage.address);
	  console.log("LogicV0:", LoveDiaryLogicV0.address);

	  LoveDiaryStorage.deployed().then(ins => {
		  ins.upgradeTo(LoveDiaryLogicV0.address).then(console.log);
  	  });
  });
};

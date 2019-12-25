const LoveDiaryStorage = artifacts.require("./LoveDiaryStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(LoveDiaryStorage);
};

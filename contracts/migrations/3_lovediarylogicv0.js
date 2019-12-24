const LoveDiaryLogicV0 = artifacts.require("./LoveDiaryLogicV0.sol");

module.exports = function(deployer) {
  deployer.deploy(LoveDiaryLogicV0);
};

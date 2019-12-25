const LoveDiaryStorage = artifacts.require('LoveDiaryStorage')
const LoveDiaryLogicV0 = artifacts.require('LoveDiaryLogicV0')

contract('LoveDiaryStorage', ([_, proxyOwner, tokenOwner, anotherAccount]) => {
  let proxy
  let impl_v0
  let logic_v0

  beforeEach(async function () {
    proxy = await LoveDiaryStorage.new({ from: proxyOwner })
    impl_v0 = await LoveDiaryLogicV0.new()
    logic_v0 = LoveDiaryLogicV0.at(proxy.address)
    await proxy.upgradeTo(impl_v0.address, { from: proxyOwner })
  });

  it('should store implementation in specified location', async function () {
    const position = web3.utils.sha3("org.zeppelinos.proxy.implementation");
    const storage = await web3.eth.getStorageAt(proxy.address, position);
	const addr = web3.utils.toChecksumAddress(storage);
    assert.equal(addr, impl_v0.address);
  });
  
});

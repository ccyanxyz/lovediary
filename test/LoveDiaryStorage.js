const LoveDiaryLogicV0 = artifacts.require('LoveDiaryLogicV0')
const LoveDiaryStorage = artifacts.require('LoveDiaryStorage')

contract('LoveDiaryStorage', ([_, proxyOwner, anotherAccount]) => {
	let proxy
	let logic_v0
	let impl_v0

	beforeEach(async function () {
		proxy = await LoveDiaryStorage.new({ from: proxyOwner })
		logic_v0 = LoveDiaryLogicV0.at(proxy.address)
		impl_v0 = await LoveDiaryLogicV0.new()
	})

	describe('owner', function () {
		it('has an owner', async function () {
			const owner = await proxy.proxyOwner()
			assert.equal(owner, proxyOwner)
		})
	})

	describe('transferOwnership', function () {
		describe('when the new proposed owner is not the zero address', function () {
			const newOwner = anotherAccount

			describe('when the sender is the owner', function () {
				const from = proxyOwner

				it('transfers the ownership', async function () {
					await proxy.transferProxyOwnership(newOwner, { from })

					const owner = await proxy.proxyOwner()
					assert.equal(owner, newOwner)
				})

				it('emits an event', async function () {
					const { logs } = await proxy.transferProxyOwnership(newOwner, { from })

					assert.equal(logs.length, 1)
					assert.equal(logs[0].event, 'ProxyOwnershipTransferred')
					assert.equal(logs[0].args.previousOwner, proxyOwner)
					assert.equal(logs[0].args.newOwner, newOwner)
				})
			})
		})
	})

	describe('implementation', function () {
		describe('when no initial implementation was provided', function () {
			it('zero address is returned', async function () {
				const implementation = await proxy.implementation()
				assert.equal(implementation, 0x0)
			})
		})

		describe('when an initial implementation was provided', function () {
			beforeEach(async () => await proxy.upgradeTo(impl_v0.address, { from: proxyOwner }))

			it('returns the given implementation', async function () {
				const implementation = await proxy.implementation()
				assert.equal(implementation, impl_v0.address)
			})
		})
	})
})

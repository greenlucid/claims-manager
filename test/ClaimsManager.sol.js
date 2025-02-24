const hre = require('hardhat');

describe('ClaimsManager', function () {
  let claimsManager, accessControlRegistry, mockApi3Pool;
  let roles;

  beforeEach(async () => {
    const accounts = await hre.ethers.getSigners();
    roles = {
      deployer: accounts[0],
      manager: accounts[1],
    };
    const accessControlRegistryFactory = await hre.ethers.getContractFactory('AccessControlRegistry', roles.deployer);
    accessControlRegistry = await accessControlRegistryFactory.deploy();
    const mockApi3PoolFactory = await hre.ethers.getContractFactory('MockApi3Pool', roles.deployer);
    mockApi3Pool = await mockApi3PoolFactory.deploy();
    const claimsManagerFactory = await hre.ethers.getContractFactory('ClaimsManager', roles.deployer);
    claimsManager = await claimsManagerFactory.deploy(
      accessControlRegistry.address,
      'ClaimsManager admin',
      roles.manager.address,
      mockApi3Pool.address,
      3 * 24 * 60 * 60,
      3 * 24 * 60 * 60
    );
  });

  describe('constructor', function () {
    it('works', async function () {
      console.log(claimsManager.address);
    });
  });
});

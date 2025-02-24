const hre = require('hardhat');

describe('ClaimsManagerWithKlerosArbitrator', function () {
  let claimsManagerWithKlerosArbitrator, accessControlRegistry, mockApi3Pool, mockKlerosArbitrator;
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
    const mockKlerosArbitratorFactory = await hre.ethers.getContractFactory('MockKlerosArbitrator', roles.deployer);
    mockKlerosArbitrator = await mockKlerosArbitratorFactory.deploy();
    const claimsManagerWithKlerosArbitratorFactory = await hre.ethers.getContractFactory(
      'ClaimsManagerWithKlerosArbitrator',
      roles.deployer
    );
    claimsManagerWithKlerosArbitrator = await claimsManagerWithKlerosArbitratorFactory.deploy(
      accessControlRegistry.address,
      'ClaimsManager admin',
      roles.manager.address,
      mockApi3Pool.address,
      3 * 24 * 60 * 60,
      3 * 24 * 60 * 60,
      mockKlerosArbitrator.address,
      '0x123456',
      40 * 24 * 60 * 60
    );
  });

  describe('constructor', function () {
    it('works', async function () {
      console.log(claimsManagerWithKlerosArbitrator.address);
    });
  });
});

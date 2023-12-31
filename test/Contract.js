const { network, getNamedAccounts, deployments, ethers } = require("hardhat");
const { assert, expect } = require("chai");

describe("Contract", async () => {
  let contract;
  let accounts = [];
  beforeEach(async () => {
    const Contract = await hre.ethers.getContractFactory("Contract");
    contract = await Contract.deploy();

    await contract.deployed();
  });

  it("change and get x", async () => {
    let x = 22;
    await contract.changeX(x);
    expect(await contract.x()).to.equal(x);
  });
});

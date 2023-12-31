const hre = require("hardhat");

const CONTRACT_ADDR = "0x6D5Ee607F5DEAD117664C78c108c049011E71FCB";

async function main() {
  const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDR);

  const x = await contract.x();
  console.log(x.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

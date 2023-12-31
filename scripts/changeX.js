const hre = require("hardhat");

const CONTRACT_ADDR = "0x6D5Ee607F5DEAD117664C78c108c049011E71FCB";

async function main() {
  const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDR);

  const tx = await contract.changeX(991);

  await tx.wait();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

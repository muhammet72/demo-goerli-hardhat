// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Contract {
    uint256 public x;

    function changeX(uint256 _x) external {
        x = _x;
    }
}

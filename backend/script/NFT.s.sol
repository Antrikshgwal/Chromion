// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import "../src/NFT.sol";

contract DeployNFT is Script {

    function run() public {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));
       NFTflow nft = new NFTflow(
          address(0x1c32A90A83511534F2582E631314569ff6C76875),
            "NFTflow",
            "FLOW",
            address(0x1c32A90A83511534F2582E631314569ff6C76875),
            uint128(1000),
            address(0xC50df0FE9a20Fd0e467592b358cd598334acc7Ea)
        );
        vm.stopBroadcast();
        console.log("NFTflow deployed to:", address(nft));
    }
}
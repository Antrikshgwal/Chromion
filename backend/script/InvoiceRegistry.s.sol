// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {InvoiceNFT} from "../src/InvoiceRegistry.sol";

contract InvoiceRegistryScript is Script {
    InvoiceNFT public invoiceNFT;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        invoiceNFT = new InvoiceNFT();

        vm.stopBroadcast();
    }
}

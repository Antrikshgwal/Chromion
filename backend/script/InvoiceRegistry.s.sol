// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {InvoiceCIDRegistry} from "../src/InvoiceRegistry.sol";

contract InvoiceCIDRegistryScript is Script {
    InvoiceCIDRegistry public invoiceCIDRegistry;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        invoiceCIDRegistry = new InvoiceCIDRegistry();

        vm.stopBroadcast();
    }
}

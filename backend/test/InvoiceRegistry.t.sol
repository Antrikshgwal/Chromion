// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {InvoiceCIDRegistry}  from "../src/InvoiceRegistry.sol";

contract InvoiceRegistryTest is Test {
    InvoiceCIDRegistry public invoiceNFT;

    function setUp() public {
        invoiceNFT = new InvoiceCIDRegistry();
    }


}

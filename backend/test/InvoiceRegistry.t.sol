// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {InvoiceNFT}  from "../src/InvoiceRegistry.sol";

contract InvoiceRegistryTest is Test {
    InvoiceNFT public invoiceNFT;

    function setUp() public {
        invoiceNFT = new InvoiceNFT();
    }


}

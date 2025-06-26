// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

// Import OpenZeppelin contracts for a secure ERC-721 implementation
import "../lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol";
import "../lib/openzeppelin-contracts/contracts/access/Ownable.sol";

/**
 * @title InvoiceNFT
 * @dev A smart contract to manage invoice cids.
 */
contract InvoiceCIDRegistry {
    event InvoiceVerified(address indexed owner, string indexed Dcid, string indexed Fcid);
    event InvoiceStored(address indexed owner, string indexed Dcid, string indexed Fcid);

    struct cid {
        string Dcid;
        string Fcid;
    }

    cid[] public cids;
    mapping(address => cid[]) public ownerToCids;

    /**
     * @dev This function is used to verify the invoice data.
     * It will trigger a chainlink function to verify the cid.
     * The function will emit an event with the details of the verification.
     */

    /**
     * @dev Dcid is cid for the invoice data, it contains another cid, Fcid, which is cid for the invoice file(PDF, image, etc.)
     */
    function isVerified(cid memory Cid) public returns (bool) {
        // This function will trigger the chainlink function to verify the cid

        emit InvoiceVerified(msg.sender, Cid.Dcid, Cid.Fcid);
        return true;
    }

    function storeCid(cid memory Cid) public {
        // This function will store the cid in the contract, so that it can be retrieved later
        cids.push(Cid);
        ownerToCids[msg.sender].push(Cid);
        emit InvoiceStored(msg.sender, Cid.Dcid, Cid.Fcid);
    }

    function getCidsByAddress(address _owner) public view returns (cid[] memory) {
        return ownerToCids[_owner];
    }

    function getAllCids() public view returns (cid[] memory) {
        return cids;
    }
}

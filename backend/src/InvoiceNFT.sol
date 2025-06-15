// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

// Import OpenZeppelin contracts for a secure ERC-721 implementation
import "../lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol";
import "../lib/openzeppelin-contracts/contracts/access/Ownable.sol";

/**
 * @title InvoiceNFT
 * @dev A contract for minting invoices as NFTs.
 * Each NFT represents a unique business invoice, with its metadata
 * stored on IPFS. This version uses a standard uint256 for token IDs.
 */
contract InvoiceNFT is ERC721, Ownable {
    // A simple uint256 is used for the counter. Solidity ^0.8.0 protects against overflow.
    // We start at 1, so the first minted token will have tokenId 1.
    uint256 private _currentTokenId = 1;

    // Struct to hold invoice-specific data
    struct Invoice {
        string ipfsCid;      // CID of the primary invoice data (JSON metadata)
        uint256 amount;      // Invoice amount (e.g., in cents to avoid decimals)
        address recipient;   // Who the invoice is for
        bool isPaid;         // Status of the invoice
    }

    // Mapping from a tokenId to its detailed Invoice struct
    mapping(uint256 => Invoice) public invoiceDetails;

    // Event to announce when a new invoice is minted
    event InvoiceMinted(
        address indexed owner,
        uint256 indexed tokenId,
        string ipfsCid,
        uint256 amount,
        address recipient
    );

    // Event to announce when an invoice status is updated
    event InvoicePaid(uint256 indexed tokenId);

    /**
     * @dev Initializes the contract, setting the NFT name and symbol.
     */
    constructor() ERC721("InvoiceNFT", "INFT") Ownable(msg.sender) {}

    /**
     * @dev Mints a new invoice NFT and assigns it to the caller.
     * The caller must provide the IPFS CID for the invoice's metadata JSON.
     * @param ipfsMetadataCid The CID of the metadata JSON file stored on IPFS.
     * @param amount The total amount due for the invoice.
     * @param recipient The address to whom the invoice is issued.
     */
    function mintInvoice(
        string memory ipfsMetadataCid,
        uint256 amount,
        address recipient
    ) public returns (uint256) {
        // Use the current ID for the new token
        uint256 newTokenId = _currentTokenId;

        // Mint the NFT and assign it to the function caller (the business)
        _safeMint(msg.sender, newTokenId);

        // Store the associated invoice data on-chain
        invoiceDetails[newTokenId] = Invoice({
            ipfsCid: ipfsMetadataCid,
            amount: amount,
            recipient: recipient,
            isPaid: false
        });

        // Emit an event for off-chain services to track
        emit InvoiceMinted(msg.sender, newTokenId, ipfsMetadataCid, amount, recipient);

        // Increment the counter for the next mint. This will revert on overflow.
        _currentTokenId++;

        return newTokenId;
    }

    /**
     * @dev Marks an invoice as paid. Can only be called by the NFT owner.
     * @param tokenId The ID of the invoice NFT to mark as paid.
     */
    function markAsPaid(uint256 tokenId) public {
        // Ensure the caller owns the NFT
        require(ownerOf(tokenId) == msg.sender, "ERC721: caller is not the owner");

        Invoice storage invoice = invoiceDetails[tokenId];
        require(!invoice.isPaid, "Invoice is already paid.");

        invoice.isPaid = true;
        emit InvoicePaid(tokenId);
    }

    /**
     * @dev Returns the metadata URI for a given token.
     * This constructs the URI using the IPFS CID stored during minting.
     * @param tokenId The ID of the token.
     */
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "ERC721: URI query for nonexistent token");

        string memory cid = invoiceDetails[tokenId].ipfsCid;
        return string(abi.encodePacked("ipfs://", cid));
    }
}

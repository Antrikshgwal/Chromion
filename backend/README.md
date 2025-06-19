contract address is `0xd5e4a7B1F649603fb87E5635B168c003E4FacE83` on polygon amoy testnet

-   `mintWithSignature`: This is the most important function for your platform.

    -   How to use: Your backend server, acting as the contract owner, will generate a signed payload for a verified user. This payload includes who the NFT is for (`_req.to`), its metadata (`_req.uri`), a price (`_req.pricePerToken`), etc. The user then takes this payload and the generated `_signature` and submits them here to mint their NFT. The user pays the gas for this transaction[3](https://portal.thirdweb.com/contracts/design-docs/signature-mint).

-   4\. `mintTo`: A direct minting function for administrative use.

    -   How to use: As the contract owner, you can call this directly to mint an NFT for someone. You would provide the recipient's address (`_to`) and the JSON metadata URL (`_tokenURI`).

-   3\. `burn`: Destroys an NFT, permanently removing it from circulation.

    -   How to use: The owner of an NFT can call this with the `tokenId` to burn their own token.

-   1\. `approve` & 10. `setApprovalForAll`: Standard ERC721 functions for marketplace integration.

    -   How to use: To list an NFT on a marketplace like OpenSea, the token owner must first *approve* the marketplace's contract to transfer the token on their behalf. `setApprovalForAll` grants this permission for all NFTs in the collection, which is the standard practice.

-   7\. `safeTransferFrom` & 8. `transferFrom`: Standard ERC721 functions to transfer an NFT to another wallet.

-   11\. `setContractURI`: Sets the metadata for the entire collection (e.g., collection name, description, image) that appears on marketplaces.

    -   How to use: Provide a URL to a JSON file containing the collection's metadata.

-   12\. `setDefaultRoyaltyInfo`: Sets the default royalty percentage for all secondary sales.

    -   How to use: Provide the recipient address (`_royaltyRecipient`) and the fee in basis points (`_royaltyBps`). For example, 500 equals a 5% royalty.

-   13\. `setOwner`: Transfers ownership of the entire contract to a new address. This is a highly sensitive function.

-   14\. `setPrimarySaleRecipient`: Changes the wallet address that receives the funds from initial mints (if you set a price in the `mintWithSignature` payload).


-------------


-   1\. `balanceOf`: Shows how many NFTs a specific wallet address (`owner`) owns in this collection.

-   15\. `ownerOf`: Shows the wallet address that owns a specific NFT (`tokenId`).

-   21\. `tokenURI`: Retrieves the metadata URL for a specific NFT (`tokenId`). This URL points to the JSON file with the NFT's name, image, and attributes.

-   24\. `totalSupply`: Shows the total number of NFTs that have been minted in this collection so far.

-   13\. `name` & 20. `symbol`: Returns the name and symbol of your NFT collection that you set during deployment.

-   16\. `owner`: Shows the current owner/admin of the entire smart contract.

-   17\. `primarySaleRecipient`: Shows the address currently set to receive primary sale funds.

-   18\. `royaltyInfo`: Shows the default royalty recipient and percentage for a given sale price.

-   25\. `verify`: This is a powerful helper function for `mintWithSignature`. It allows you to check if a signature and mint request payload are valid *without* sending a transaction and spending gas. This is useful for providing feedback on your website's frontend before the user attempts to mint.
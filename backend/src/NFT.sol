// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "contracts/base/ERC721SignatureMint.sol";

contract NFTflow is ERC721SignatureMint {
    constructor(
        address _defaultAdmin,
        string memory _name,
        string memory _symbol,
        address _royaltyRecipient,
        uint128 _royaltyBps,
        address _primarySaleRecipient
    )
        ERC721SignatureMint(
            _defaultAdmin,
            _name,
            _symbol,
            _royaltyRecipient,
            _royaltyBps,
            _primarySaleRecipient
        )
    {}
}

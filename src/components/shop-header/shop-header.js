import React from 'react';

const ShopHeader = ({ numItems, total }) => {
    return (
        <header >
            <a href="#">ReStore</a>
            <span>{numItems} items (${total})</span>
        </header>
    )
}

export default ShopHeader;
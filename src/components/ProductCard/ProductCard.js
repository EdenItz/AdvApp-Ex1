import React from 'react';

function ProductCard({ name, price, images }) {
    return (
        <div className="product-card">
            <img src={images && images[0]} alt="img not found" />
            <p>{name}</p>
            <p>{price}</p>
        </div>
    );
}

export default ProductCard;

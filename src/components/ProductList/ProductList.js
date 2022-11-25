import React, { useEffect, useState } from 'react';
import { productsJson } from '../../MockData/products';
import ProductCard from '../ProductCard/ProductCard';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Preparation for when there will be DB
        setProducts(productsJson);
    }, []);

    return (
        <div className="products-list center">
            {products.map(product => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
}

export default ProductList;

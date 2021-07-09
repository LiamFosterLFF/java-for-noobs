import { useState, useEffect } from 'react';
import axios from 'axios'

const ProductScreen = () => {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        axios.get("/api/products").then(response => {
          setProducts(response.data)
        })
    }, []);

    const Products = ({ products }) => {
        return products.slice(10).map((product, index) => {
            return (
                <div className="product" key={index}>
                    <div className="product-name">Name: {product.name}</div>
                    <div className="product-category">Category: {product.category}</div>
                    <div className="product-description">Description: {product.description}</div>
                    <div className="product-price">Price: {product.price}</div>
                    <div className="product-reviews">No of Reviews: {product.numReviews}</div>
                    <div className="product-rating">Rating: {product.rating}</div>
                    <div className="product-inStock">Inventory: {product.countInStock} \n</div>
                    <br></br>
                </div>
            )
        })
    }

    return (
        <div>
            <Products products={products}/>
        </div>
    )
}


export default ProductScreen;
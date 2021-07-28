import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Loader, Dimmer } from 'semantic-ui-react';
import SearchBar from '../ProductsSearchBar';
import { Link } from 'react-router-dom';

import { getProducts as listProducts } from '../../redux/actions/productActions';

const ProductsScreen = () => {
    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts
    console.log(products)

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);

    const Product = ( { product, index }) => {
        return (
            <Link className="product" to={`/productDetails/${product._id}`} key={index}>
                <div className="product-name">Name: {product.name}</div>
                <div className="product-category">Category: {product.category}</div>
                <div className="product-description">Description: {product.description}</div>
                <div className="product-price">Price: {product.price}</div>
                <div className="product-reviews">No of Reviews: {product.numReviews}</div>
                <div className="product-rating">Rating: {product.rating}</div>
                <div className="product-inStock">Inventory: {product.countInStock}</div>
                <div className="product-inStock">ImageURL: {product.imageUrl}</div>
                <img src={product.imageUrl} alt={product.name}/>
                <br></br>
            </Link>
        )
    }

    return (
        <div style={{minHeight: "100vh"}}>
            <SearchBar/>

            {loading ? 
                <Dimmer active><Loader>Loading...</Loader></Dimmer>:
                error ? 
                    <h2>{error}</h2> :
                    products.slice(0, 10).map((product, index) => <Product product={product} key={index}/>)
            }
        </div>
    )
}


export default ProductsScreen;
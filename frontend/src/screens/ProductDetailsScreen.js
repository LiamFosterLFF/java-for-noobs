import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dimmer, Loader, Button } from 'semantic-ui-react';
import QuantityDropdown from '../components/QuantityDropdown';

//Actions
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const ProductDetailsScreen = ({ match, history }) => {
    const [ qty, setQty ] = useState(1)
    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.getProductDetails);
    const { product, loading, error } = productDetails;

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id))
        }
    }, [dispatch, product, match]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push('/cart');
    }



    const ProductDetails = ({ product }) => {
        return (
            <div className="product">
                <div className="product-name">Name: {product.name}</div>
                <div className="product-category">Category: {product.category}</div>
                <div className="product-description">Description: {product.description}</div>
                <div className="product-price">Price: {product.price}</div>
                <div className="product-reviews">No of Reviews: {product.numReviews}</div>
                <div className="product-rating">Rating: {product.rating}</div>
                <div className="product-inStock">Inventory: {product.countInStock}</div>
                <div className="product-image">ImageURL: {product.imageUrl}</div>
                <img src={product.imageUrl} alt={product.name}/>
                <Button onClick={addToCartHandler}>Add to cart</Button>
                <QuantityDropdown qty={qty} setQty={setQty} countInStock={product.countInStock}/>
                <br></br>
            </div>
        )
    }

    return (
    <div style={{ height: "100vh" }} >
        {loading ? 
            <Dimmer active><Loader>Loading...</Loader></Dimmer>:
            error ? 
                <h2>{error}</h2> :
                <ProductDetails product={product}/>
        }
    </div>)
}

export default ProductDetailsScreen;
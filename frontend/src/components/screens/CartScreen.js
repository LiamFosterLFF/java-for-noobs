import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import QuantityDropdown from '../QuantityDropdown';

import { addToCart } from '../../redux/actions/cartActions';

const CartScreen = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    };

    const CartItem = ({ item, qty, qtyChangeHandler,  }) => {

        // Currently a bug with quantity dropdown being added to cart, possibly with adding same item to cart in general
        // Would like that when you add an item to the cart that's already in there, it adds another one
        // Might be better to separate into two functions: One for adding to cart and one for updating quantity
        return (
            <div className="item">
                <QuantityDropdown qty={qty} setQty={qtyChangeHandler} countInStock={1000} /> 

                <div className="item-name">Name: {item.name}</div>
                <div className="item-category">Category: {item.category}</div>
                <div className="item-description">Description: {item.description}</div>
                <div className="item-price">Price: {item.price}</div>
                <div className="item-reviews">No of Reviews: {item.numReviews}</div>
                <div className="item-rating">Rating: {item.rating}</div>
                <div className="item-inStock">Inventory: {item.countInStock}</div>
                <div className="item-image">ImageURL: {item.imageUrl}</div>
                <img src={item.imageUrl} alt={item.name}/>
            )
            </div>
        )
    }

    return (<>{
        (cartItems.length === 0) ?
            (<div> Your cart is empty <Link to='/'>Go Back</Link></div>) :
            cartItems.map((item, index) => <CartItem item={item} qty={item.qty} qtyChangeHandler={qtyChangeHandler}/>)
    }</>)
}


export default CartScreen;
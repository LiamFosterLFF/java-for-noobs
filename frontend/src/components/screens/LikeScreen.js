import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import { unlikeItem } from '../../redux/actions/likeButtonActions';


const LikeScreen = () => {
    const dispatch = useDispatch();
    const likedItems = useSelector(state => state.likedItems);
    const { hearts } = likedItems;

    const Heart = ({ item }) => {
        return (
            <div className="item">
                <div className="item-name">Name: {item.name}</div>
                <div className="item-category">Category: {item.category}</div>
                <div className="item-description">Description: {item.description}</div>
                <div className="item-price">Price: {item.price}</div>
                <div className="item-reviews">No of Reviews: {item.numReviews}</div>
                <div className="item-rating">Rating: {item.rating}</div>
                <div className="item-inStock">Inventory: {item.countInStock}</div>
                <div className="item-image">ImageURL: {item.imageUrl}</div>
                <Button onClick={() => dispatch(unlikeItem(item))}>Remove Item</Button>
                <img src={item.imageUrl} alt={item.name}/>
            )
            </div>
        )
    }

    return (
        <div>
            {(hearts.length === 0) ?
                (<div> You have no liked items <Link to='/'>Go Back</Link></div>) :
                hearts.map((item, index) => <Heart item={item} key={index} />)}
        </div>)
}


export default LikeScreen;
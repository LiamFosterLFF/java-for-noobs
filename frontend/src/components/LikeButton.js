import { Icon } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleItem } from '../redux/actions/likeButtonActions';

const LikeButton = ({ item }) => {
    const dispatch = useDispatch();
    const likedItems = useSelector(state => state.likedItems);
    const { hearts } = likedItems;

    const containsItem = (array, item) =>  {
        if (array.find((x) => x._id == item._id)) {
            return true
        }
        return false
    }

    return (
        <Icon 
            size="large" 
            name={containsItem(hearts, item) ? 'heart' : "heart outline"} 
            onClick={() => dispatch(toggleItem(item))}
            style={ {cursor: "pointer"} }
        />
    )
}

export default LikeButton;
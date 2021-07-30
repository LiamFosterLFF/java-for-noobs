import * as actionTypes from '../constants/likeButtonConstants';

export const likeButtonReducer = (state = { hearts: [] }, action) => {
    switch (action.type) {
        case actionTypes.LIKE_ITEM: {
            const item = action.payload.item;
            return {
                ...state,
                hearts: [...state.hearts, item]
            }
        }

        case actionTypes.UNLIKE_ITEM: {
            const item = action.payload.item;
            return {
                ...state,
                hearts: state.hearts.filter((x) => (x._id !== item._id))
            }
        }
        
        default:
            return state;
    }
}
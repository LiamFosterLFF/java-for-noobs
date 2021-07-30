import * as actionTypes from '../constants/likeButtonConstants';
import axios from 'axios';

export const likeItem = (item) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.LIKE_ITEM,
        payload: { item }
    })
    localStorage.setItem('likedItems', JSON.stringify(getState().likedItems.hearts))
}

export const unlikeItem = (item) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.UNLIKE_ITEM,
        payload: { item }
    })
    localStorage.setItem('likedItems', JSON.stringify(getState().likedItems.hearts))
}

export const toggleItem = (item) => (dispatch, getState) => {
    const likedItems = getState().likedItems.hearts;
    console.log(likedItems);

    if (likedItems.find(x => x._id === item._id)) {
        dispatch({
            type: actionTypes.UNLIKE_ITEM,
            payload: { item }
        })
        localStorage.setItem('likedItems', JSON.stringify(getState().likedItems.hearts))
    } else {
        dispatch({
            type: actionTypes.LIKE_ITEM,
            payload: { item }
        })
        localStorage.setItem('likedItems', JSON.stringify(getState().likedItems.hearts))
    }
}
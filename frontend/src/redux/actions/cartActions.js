import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            ...data,
            qty
        }
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}

export const sendPaymentData = (id, amount) => async (dispatch, getState) => {
    try {
        const response = await axios.post("http://localhost:5000/api/payment", { amount, id });

        if(response.data.success) {
            dispatch({
                type: actionTypes.PURCHASE_SUCCESS
            })
        }
        
    } catch (error) {
        dispatch({ 
            type: actionTypes.PURCHASE_FAIL,
            payload: (error.response && error.response.data.message) ? error.response.data.message : error.message
        });
    }

}
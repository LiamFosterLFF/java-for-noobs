import * as actionTypes from '../constants/productConstants';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST});

        const { data } = await axios.get("/api/products");

        dispatch({ 
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({ 
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: (error.response && error.response.data.message) ? error.response.data.message : error.message
        });
    }
}

export const searchProducts = (query) => async (dispatch) => {
    try {
        if (query.length) {
            dispatch({ type: actionTypes.GET_PRODUCTS_SEARCH_REQUEST});
            const { data } = await axios.get(`/api/search/?query=${query}`);
    
            dispatch({ 
                type: actionTypes.GET_PRODUCTS_SEARCH_SUCCESS,
                payload: data
            });
        } else {
            dispatch({
                type: actionTypes.GET_PRODUCTS_SEARCH_RESET
            })
        }


    } catch (error) {
        dispatch({ 
            type: actionTypes.GET_PRODUCTS_SEARCH_FAIL,
            payload: (error.response && error.response.data.message) ? error.response.data.message : error.message
        });
    }
}

export const getSearchSuggestions = (query) => async (dispatch) => {
    try {
        if (query.length) {
            dispatch({ type: actionTypes.GET_PRODUCTS_SEARCH_SUGGESTIONS_REQUEST});
            const { data } = await axios.get(`/api/search/suggestions?query=${query}`);
    
            dispatch({ 
                type: actionTypes.GET_PRODUCTS_SEARCH_SUGGESTIONS_SUCCESS,
                payload: data
            });
        } else {
            dispatch({
                type: actionTypes.GET_PRODUCTS_SEARCH_SUGGESTIONS_RESET
            })
        }
 
    } catch (error) {
        dispatch({ 
            type: actionTypes.GET_PRODUCTS_SEARCH_SUGGESTIONS_FAIL,
            payload: (error.response && error.response.data.message) ? error.response.data.message : error.message
        });
    }
}

export const removeSearchSuggestions = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_PRODUCTS_SEARCH_SUGGESTIONS_RESET
    })
}


export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST});

        const { data } = await axios.get(`/api/products/${id}`);

        dispatch({ 
            type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({ 
            type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
            payload: (error.response && error.response.data.message) ? error.response.data.message : error.message
        });
    }
}

export const removeProductDetails = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_RESET
    })
}


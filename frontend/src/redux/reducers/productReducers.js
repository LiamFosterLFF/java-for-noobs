import * as actionTypes from '../constants/productConstants';

export const getProductsReducer = (state = { products: [], allProducts: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                products: []
            }
        
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                allProducts: action.payload
            }

        case actionTypes.GET_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case actionTypes.GET_PRODUCTS_SEARCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case actionTypes.GET_PRODUCTS_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }

        case actionTypes.GET_PRODUCTS_SEARCH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_PRODUCTS_SEARCH_RESET:
            return {
                ...state,
                products: state.allProducts
            }

        default:
            return state;
    }
}

export const getProductDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
            }
        
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }

        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return {
                product: {}
            }

        default:
            return state;
    }
}
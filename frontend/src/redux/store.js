import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import { cartReducer } from './reducers/cartReducers';
import { getProductsReducer, searchProductsReducer, getProductDetailsReducer } from './reducers/productReducers';
import { authReducer } from './reducers/authReducers';

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    auth: authReducer
})

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem("cart") ? JSON.parse( localStorage.getItem("cart")) : [];
const loggedIn = localStorage.getItem("authToken") ? true: false;
const INITIAL_STATE = {
    cart: {
        cartItems: cartFromLocalStorage
    },
    auth: {loggedIn}
}

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
import * as actionTypes from '../constants/authConstants';

export const authReducer = (state = { loggedIn: false }, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                success: true,
                loggedIn: true
            }

        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                success: false,
                loggedIn: false,
                error: action.payload
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                loggedIn: false
            }

        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                success: true,
                loggedIn: true
            }

        case actionTypes.REGISTER_FAIL:
            return {
                ...state,
                success: false,
                loggedIn: false,
                error: action.payload
            }

        default: 
            return state;
    }
}

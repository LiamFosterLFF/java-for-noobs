import * as actionTypes from '../constants/authConstants';
import axios from 'axios';

export const login = (target) => async (dispatch, getState) => {
    const [email, password, ...rest] = target; 

    const config = {
        header: {
            "Content-Type": "application/json"
        }
    }

    try {
        const { data } = await axios.post(
            "/api/auth/login", 
            {
                email: email.value, 
                password: password.value
            }, 
            config
        )
        
        localStorage.setItem("authToken", data.token);

        dispatch({ 
            type: actionTypes.LOGIN_SUCCESS
        });

    } catch (error) {
        dispatch({ 
            type: actionTypes.LOGIN_FAIL,
            payload: (error.response && error.response.data.message) ? error.response.data.message : error.message
        });

    }
}

export const logout = () => (dispatch, getState) => {
    localStorage.removeItem("authToken")

    dispatch({
        type: actionTypes.LOGOUT
    })
}

export const register = (target) => async (dispatch, getState) => {
    const [username, email, password, confirmPassword, ...rest] = target; 

    const config = {
        header: {
            "Content-Type": "application/json"
        }
    }

    try {
        const { data } = await axios.post(
            "/api/auth/register", 
            {
                username: username.value, 
                email: email.value, 
                password: password.value
            }, 
            config
        )
        
        localStorage.setItem("authToken", data.token);

        dispatch({ 
            type: actionTypes.REGISTER_SUCCESS
        });
        // return {
        //     success: true
        // };
    } catch (error) {
        dispatch({ 
            type: actionTypes.REGISTER_FAIL,
            payload: (error.response && error.response.data.message) ? error.response.data.message : error.message
        });
        // return {
        //     success: false,
        //     error: error.response.data.error
        // }
    }
}
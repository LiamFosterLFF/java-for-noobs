import { useEffect } from 'react';
import DefaultForm from '../DefaultForm';
import { Link } from 'react-router-dom';

import { register } from '../../redux/actions/authActions';



// Needs some better error handling for the registerhandler/input
const RegisterScreen = ({ history }) => {

    useEffect(() => {
        if (localStorage.getItem("authToken")) {
            history.push('/')
        }
    })

    const formProps = {
        "title": "Register",
        "formGroups": [
            { name: "name", title: "Username: ", type: "text", required: true, placeholder: "Enter Username", initialValue: ""},
            { name: "email", title: "Email: ", type: "text", required: true, placeholder: "Enter Email", initialValue: ""},
            { name: "password", title: "Password: ", type: "password", required: true, placeholder: "Enter Password", initialValue: ""},
            { name: "confirmPassword", title: "Confirm Password: ", type: "password", required: true, placeholder: "Enter Confirm Password", initialValue: ""},
        ],
        "handler": register
    }
    
    return (
        <div className="register-screen">
            <DefaultForm props={formProps} />
            <span className="register-screen__subtext">Already have an account? <Link to='/login'>Log In</Link></span>
        </div>
    )
};

export default RegisterScreen;
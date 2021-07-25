import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import DefaultForm from '../DefaultForm';
import { login } from '../../redux/actions/authActions';

// Needs some better error handling for the loginhandler/input

const LogInScreen = ({ history }) => {

    useEffect(() => {
        if (localStorage.getItem("authToken")) {
            history.push('/')
        }
    })

    const formProps = {
        "title": "Log In",
        "formGroups": [
            { name: "name", title: "Email: ", type: "text", required: true, placeholder: "Enter Email", initialValue: "" },
            { name: "password", title: "Password: ", type: "password", required: true, placeholder: "Enter Password", initialValue: "" }
        ],
        "handler": login,
    }

    return (
        <div className="register-screen"> 
            <DefaultForm props={formProps} />
            <span className="register-screen__subtext">Don't have an account? <Link to='/register'>Register</Link></span>
        </div>
    )
};

export default LogInScreen;
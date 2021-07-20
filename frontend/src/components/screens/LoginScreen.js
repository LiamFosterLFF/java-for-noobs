import { useEffect } from 'react';
import DefaultForm from '../DefaultForm';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Needs some better error handling for the loginhandler/input

const LogInScreen = ({ history }) => {

    useEffect(() => {
        if (localStorage.getItem("authToken")) {
            history.push('/')
        }
    })

    const loginHandler = async (e) => {
        e.preventDefault();
        const [email, password, ...rest] = e.target; 

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
            history.push("/");
        } catch (error) {
            console.log(error.response.data.error);
        }
    }

    const formProps = {
        "title": "Log In",
        "formGroups": [
            { name: "name", title: "Username: ", type: "text", required: true, placeholder: "Enter Username", initialValue: ""},
            { name: "password", title: "Password: ", type: "password", required: true, placeholder: "Enter Password", initialValue: ""}
        ],
        "handler": loginHandler,
    }

    return (
        <div className="register-screen"> 
            <DefaultForm props={formProps} />
            <span className="register-screen__subtext">Don't have an account? <Link to='/register'>Register</Link></span>
        </div>
    )
};

export default LogInScreen;
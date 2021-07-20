import DefaultForm from '../DefaultForm';
import { Link } from 'react-router-dom';
import axios from 'axios';


const RegisterScreen = ({ history }) => {
    const registerHandler = async (e) => {
        e.preventDefault();
        const [username, email, password, confirmPassword, ...rest] = e.target; 
        console.log(username.value, email.value, password.value, confirmPassword.value);

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
                    password: password.value}, 
                config
            )
            
            localStorage.setItem("authToken", data.token);
            history.push("/");
        } catch (error) {
            console.log(error.response.data.error);
        }
    }

    const formProps = {
        "title": "Register",
        "formGroups": [
            { name: "name", title: "Username: ", type: "text", required: true, placeholder: "Enter Username", initialValue: ""},
            { name: "email", title: "Email: ", type: "text", required: true, placeholder: "Enter Email", initialValue: ""},
            { name: "password", title: "Password: ", type: "password", required: true, placeholder: "Enter Password", initialValue: ""},
            { name: "confirmPassword", title: "Confirm Password: ", type: "password", required: true, placeholder: "Enter Confirm Password", initialValue: ""},
        ],
        "handler": registerHandler,
    }
    
    return (
        <div className="register-screen">
            <DefaultForm props={formProps} />
            <span className="register-screen__subtext">Already have an account? <Link to='/login'>Log In</Link></span>
        </div>
    )
};

export default RegisterScreen;
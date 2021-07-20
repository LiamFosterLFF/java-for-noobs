// import DefaultForm from '../DefaultForm';

// Probably need to do some work on the logic for being logged in, possible a state variable as a prop
const LogInScreen = () => {
    const formProps = {
        "title": "Log In",
        "formGroups": [
            { name: "name", title: "Username: ", type: "text", required: true, placeholder: "Enter Username", initialValue: ""},
            { name: "password", title: "Password: ", type: "password", required: true, placeholder: "Enter Password", initialValue: ""}
        ]
    }

    return (
        <div className="register-screen"> 
            {/* <DefaultForm props={formProps} /> */}
        </div>
    )
};

export default LogInScreen;
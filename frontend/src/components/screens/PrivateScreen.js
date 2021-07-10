import { useState, useEffect } from 'react';
import axios from 'axios';
// Currently not being used but could probably pivot into a profile page or sth
const PrivateScreen = ({ history }) => {
    const [ error, setError ] = useState("");
    const [ privateData, setPrivateData ] = useState("");

    useEffect(() => {
        if(!localStorage.getItem("authToken")) {
            history.pushState("/login");
        }

        const fetchPrivateData = async () => {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`
                }
            }

            try {
                const {data} = await axios.get("/api/private", config);
                setPrivateData(data.data);
            } catch (error) {
                localStorage.removeItem("authToken");
                setError("You are not authorized, please login again")
            }
        }
    }, [history])

    const logoutHandler = () => {
        localStorage.removeItem("authToken");
        history.pushState("/login");
    }

    return (
        error ? <span className="error-message">{error}</span> : <>
        <div>{privateData}</div>
        <button onClick={logoutHandler}>Logout</button>
        </>
    )
};

export default PrivateScreen;
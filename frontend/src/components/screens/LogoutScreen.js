import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import { logout } from '../../redux/actions/authActions';

const LogoutScreen = ({ history }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logout())
        history.push('/')
    }, [])

    return <></>
}

export default LogoutScreen;
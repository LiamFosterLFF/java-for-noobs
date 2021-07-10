
const LogInOut = ({ loggedIn }) => {
    
    const LogIn = () => {
        return (
            <div>
                You are not logged in.
            </div>
        )
    }
    
    const LogOut = () => {
        return (
            <div>
                You are not logged in.
            </div>
        )
    }

    return (
        <>{loggedIn ? <LogOut/> :<LogIn/>}</>
    )
}


export default LogInOut;
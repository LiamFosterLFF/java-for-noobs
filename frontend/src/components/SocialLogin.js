import FacebookLogin from 'react-facebook-login';

const SocialLogin = () => {
    return (
        <div>
            <FacebookLogin
            appId="560721701612640"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook} />
        </div>
    )
}

export default SocialLogin;
import { Button, Icon } from 'semantic-ui-react';
import { facebookProvider, githubProvider, googleProvider, twitterProvider } from './config/firebase_auth_methods'
import socialMediaAuth from './service/auth';

const SocialLogin = () => {
    const handleOnClick = async (provider) => {
        const res = await socialMediaAuth(provider)
        console.log(res);;
    }

    return (
        <div>
            <Button color='facebook' onClick={() => handleOnClick(facebookProvider)}>
                <Icon name='facebook' /> Facebook
            </Button>
            <Button color='twitter' onClick={() => handleOnClick(twitterProvider)}>
                <Icon name='twitter' /> Twitter
            </Button>
            <Button color='google plus' onClick={() => handleOnClick(googleProvider)}>
                <Icon name='google' /> Google
            </Button>
            <Button color='github' onClick={() => handleOnClick(githubProvider)}>
                <Icon name='github' /> Github
            </Button>
        </div>
    )
}

export default SocialLogin;
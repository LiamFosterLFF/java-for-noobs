import { Button, Icon } from 'semantic-ui-react';
import { facebookProvider, githubProvider, googleProvider } from './config/firebase_auth_methods'
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
            <Button color='twitter'>
                <Icon name='twitter' /> Twitter
            </Button>
            <Button color='google plus' onClick={() => handleOnClick(googleProvider)}>
                <Icon name='google plus' /> Google Plus
            </Button>
            <Button color='github' onClick={() => handleOnClick(githubProvider)}>
                <Icon name='github' /> Github
            </Button>
            <Button color='linkedin'>
                <Icon name='linkedin' /> LinkedIn
            </Button>
            <Button color='instagram'>
                <Icon name='instagram' /> Instagram
            </Button>
            <Button color='youtube'>
                <Icon name='youtube' /> YouTube
            </Button>
        </div>
    )
}

export default SocialLogin;
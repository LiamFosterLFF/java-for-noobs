import firebase from '../config/firebase_config';
const socialMediaAuth = (provider) => {
    return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
        return res.user;
    })
    .catch((error) => {
        return error
    });
};

export default socialMediaAuth;
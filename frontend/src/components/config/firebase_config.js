import firebase from 'firebase';
// Firebase Config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAnxoc01HjIiBqj7Cnm98Lm6FQqhQGXzgk",
    authDomain: "java4noobz-a807d.firebaseapp.com",
    projectId: "java4noobz-a807d",
    storageBucket: "java4noobz-a807d.appspot.com",
    messagingSenderId: "326774456732",
    appId: "1:326774456732:web:17c1f43918f9b07bafc859",
    measurementId: "G-T8C59B6Y68"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;
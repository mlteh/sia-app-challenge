import firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyCrGm385E1zs_WSHWHB--bxf_FfJVcu-bg",
    authDomain: "sia-app-challenge-b1e21.firebaseapp.com",
    databaseURL: "https://sia-app-challenge-b1e21.firebaseio.com",
    projectId: "sia-app-challenge-b1e21",
    storageBucket: "sia-app-challenge-b1e21.appspot.com",
    messagingSenderId: "619464224096"
  };

firebase.initializeApp(config);

export default firebase;
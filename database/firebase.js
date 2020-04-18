const firebase = require('firebase/app');
require('firebase/database');

const firebaseConfig = {
    apiKey: "AIzaSyDyq9_xYRqcjnzGUyqzQE-iIJ8SewQ7u3A",
    authDomain: "smarthouse-a7aa7.firebaseapp.com",
    databaseURL: "https://smarthouse-a7aa7.firebaseio.com",
    projectId: "smarthouse-a7aa7",
    storageBucket: "smarthouse-a7aa7.appspot.com",
    messagingSenderId: "927583996955",
    appId: "1:927583996955:web:f0296b04f84d1c2c3bbcbe"
}

export default firebase.initializeApp(firebaseConfig)
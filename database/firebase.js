import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDyq9_xYRqcjnzGUyqzQE-iIJ8SewQ7u3A",
    authDomain: "smarthouse-a7aa7.firebaseapp.com",
    databaseURL: "https://smarthouse-a7aa7.firebaseio.com",
    projectId: "smarthouse-a7aa7",
    storageBucket: "smarthouse-a7aa7.appspot.com",
    messagingSenderId: "927583996955",
    appId: "1:927583996955:web:f0296b04f84d1c2c3bbcbe"
}

const app =  firebase.default.initializeApp(firebaseConfig)
const db = app.database()
const ref = db.ref()

ref.once('value')
 .then(function (snap) {
 console.log('snap.val()', snap.val());
})

export default ref
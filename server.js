const express = require('express');
const app = express();
const firebase = require('./database/firebase.js')
import api from './src/api';

console.log(firebase)

initApis(app)

// viewed at http://localhost:3000
app.use(express.static('dist'))

app.listen(3000);

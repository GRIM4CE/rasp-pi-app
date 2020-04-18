import express from 'express'
import api from './src/api/index.js'
import firebase from 'database/firebase.js'

const app = express()
console.lot(firebase.database())
// Sets API's to /api/v1
app.use('/api/v1', api);
// Activates project folder
app.use(express.static('dist'))

app.listen(3000);

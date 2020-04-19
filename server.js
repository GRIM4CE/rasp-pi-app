import express from 'express'
import api from './src/api/index.js'

const app = express()
// Sets API's to /api/v1
app.use('/api/v1', api);
// Activates project folder
app.use(express.static('dist'))

app.listen(3000);

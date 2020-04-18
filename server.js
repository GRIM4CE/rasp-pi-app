const express = require('express');
const app = express();
const path = require('path');
const {spawn} = require('child_process');
import initApis from 'api'

initApis(app)

// viewed at http://localhost:3000
app.use(express.static('dist'))

app.listen(3000);

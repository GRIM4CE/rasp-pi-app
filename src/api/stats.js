const {spawn} = require('child_process');

app.get('/python', (req, res) => {
  let jsonData
  // // spawn new child process to call the python script
  const python = spawn('python3', ['python/tempHumi.py'])
  python.stdout.on('data', (data) => {
    jsonData = data
  })
  // in close event we are sure that stream is from child process is closed
  python.on('close', (code) => {
    res.send(jsonData)
  })
})

class StatsAPI {
  constructor(app) {
    this.app = app
  }
}

export default ApiService

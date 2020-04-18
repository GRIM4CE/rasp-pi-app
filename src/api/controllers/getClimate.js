import { spawn } from 'child_process'

export function getClimate(req, res) {
  let jsonData
  // spawn new child process to call the python script
  const python = spawn('python3', ['../../python/climateSensor.py'])
  console.log(python)
  // python.stdout.on('data', (data) => {
  //   jsonData = data
  // })
  // in close event we are sure that stream is from child process is closed
  python.on('close')
  res.send('hi');
}
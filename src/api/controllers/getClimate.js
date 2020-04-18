import { spawn } from 'child_process'

export function getClimate(req, res) {
  // spawn new child process to call the python script
  let climate
  const python = spawn('python3', ['./python/climateSensor.py'])
  python.stdout.on('data', (data) => {
    climate = data
  })

  python.on('close', () => {
    res.send(climate);
  })
}
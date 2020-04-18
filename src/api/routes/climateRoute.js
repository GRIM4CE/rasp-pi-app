import express from 'express'
import { getClimate } from '../controllers/getClimate.js'
import { getClimateHistory } from '../controllers/getClimateHistory.js'

const climateRouter = express.Router()

climateRouter.get('/', getClimate)
climateRouter.get('/history', getClimateHistory)
export default climateRouter
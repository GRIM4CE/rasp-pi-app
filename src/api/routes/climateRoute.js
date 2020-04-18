import express from 'express'
import { getClimateHistory } from '../controllers/getClimateHistory.js'

const climateRouter = express.Router()

climateRouter.get('/', getClimateHistory)
export default climateRouter
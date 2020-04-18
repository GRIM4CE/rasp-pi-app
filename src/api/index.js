import express from 'express'
const api = express()

import climateRouter from './routes/climateRoute.js';
api.use('/climate', climateRouter)

export default api;
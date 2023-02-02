import express from 'express'
import { router } from './models/user/routes/routes'


const app = express()
app.use(router)
app.use(express.json())

export {app}
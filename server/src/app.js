import express from 'express'
import cors from 'cors'
import userRoute from './routes/UserRoute.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/contact', userRoute)

export default app
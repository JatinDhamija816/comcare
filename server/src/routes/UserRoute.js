import express from 'express'
import { message } from '../controller/UserController.js'

const router = express.Router()

router.post('/', message)

export default router
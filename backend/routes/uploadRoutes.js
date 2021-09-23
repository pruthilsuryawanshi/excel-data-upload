import express from 'express'
const router = express.Router()
import { uploadFile } from '../controllers/uploadController.js'

router.post('/', uploadFile)

export default router
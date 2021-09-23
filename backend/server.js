import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cors from 'cors'
import fileUpload from "express-fileupload"
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()
connectDB()

const app = express()
app.use(express.json())
app.use(cors())
app.use(fileUpload())

app.use('/upload', uploadRoutes)

app.get('/', (req, res) => {
    res.send('API is running...')
})



const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))
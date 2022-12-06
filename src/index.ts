import express from 'express'
import logger from 'morgan'
import dotenv from 'dotenv'
import mongoose from 'mongoose'


dotenv.config()

const app = express()
app.use(logger('dev'))


mongoose.connect(process.env.MONGO_URL!, ()=>{
  console.log('MongoDB Database connected successfully')
} )


const PORT = 4100

app.listen(PORT, ()=>{
  console.log(`Server is running on port: ${PORT}`)
})
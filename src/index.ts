import express from 'express'

const app = express()

const PORT = 4100

app.listen(PORT, ()=>{
  console.log(`Server is running on port: ${PORT}`)
})
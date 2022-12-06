// import express from 'express'
// import logger from 'morgan'
import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import {ApolloServer} from 'apollo-server'
import typeDefs from './Graphql/type-def'
import resolvers from './Graphql'


// const app = express()
// app.use(logger('dev'))
mongoose.set('strictQuery', false)

const server = new ApolloServer({
typeDefs,
resolvers
})

mongoose.connect(process.env.MONGO_URL!, ()=>{
  console.log('MongoDB Database connected successfully')
} )


const PORT = 4000

server.listen(PORT, ()=>{
  console.log(`Server is running on port: ${PORT}`)
})
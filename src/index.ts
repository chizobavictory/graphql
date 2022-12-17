
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
import {ApolloServer} from "apollo-server"
import typeDefs from "./Graphql/type-def"
import resolvers from "./Graphql"


const server = new ApolloServer({
 typeDefs,
 resolvers
})

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URL!, { bufferCommands: false }, ()=>{
    console.log("Database connected")
})


const Port = 4000
server.listen(Port, ()=>{
    console.log(`Server is running on http://localhost:${Port}`)
})
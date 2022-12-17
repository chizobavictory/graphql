import { gql } from "apollo-server";

const typeDefs = gql`
  #This is the user type for the application

  type User {
    id: ID!
    fullName: String
    email: String
    phoneNumber: Int
    password: String
  }

  input CreateUserInput {
    fullName: String
    email: String
    phoneNumber: Int
    password: String
  }

  input updateUser {
    id: ID!
    fullName: String
    email: String
    phoneNumber: Int
    password: String
  }

  type Hotel {
    id: ID!
    userId: String
    description: String
    image: String
    address: String
    price: Int
    numOfBeds: Int
    numOfBaths: Int
    ratings: Int
  }

  type Message {
    message: String
  }

  #This is the hotel type for the application
  input CreateHotelInput {
    description: String
    image: String
    address: String
    price: Int
    numOfBeds: Int
    numOfBaths: Int
    ratings: Int
  }

  input UpdateHotel {
    id: ID!
    userId: String
    description: String
    image: String
    address: String
    price: Int
    numOfBeds: Int
    numOfBaths: Int
    ratings: Int
  }

  type Query {
    allUsers: [User]!
    singleUser(id: ID!): User
    allHotels: [Hotel]!
    singleHotel(id: ID!): Hotel
  }

  type Mutation {
    createUser(input: CreateUserInput): User
    updateUser(input: updateUser): User
    deleteUser(id: ID!): Message!
    createHotel(input: CreateHotelInput): Hotel
    UpdateHotel(input: UpdateHotel): Hotel
    deleteHotel(id: ID!): Message!
  }
`;
export default typeDefs;

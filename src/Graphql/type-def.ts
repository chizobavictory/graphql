import { gql } from "apollo-server";

const typeDef = gql`

type Listing {
  id: ID!,
  title: String,
  image: String,
  address: String,
  price: Int,
  numOfBed: Int,
  numOfBaths: Int,
  rating: Int,
}

type Message {
  message: String
}

input CreateListingInput {
  title: String!,
  image: String!,
  address: String!,
  price: Int!,
  numOfBed: Int!,
  numOfBaths: Int!,
  rating: Int!,
}

input UpdateListing {
  title: String,
  image: String,
  address: String,
  price: Int,
  numOfBed: Int,
  numOfBaths: Int,
  rating: Int,
}
type Query{
  allListings: [Listing]!
  singleListing(id: ID!): Listing
}


type Mutation{
createListing(input: CreateListingInput): Listing
updateListing(input: UpdateListing): Listing
deleteListing(id:ID!): Message!
}
`;


export default typeDef
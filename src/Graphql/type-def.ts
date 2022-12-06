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

imput CreateListingInput {
  title: String,
  image: String,
  address: String,
  price: Int,
  numOfBed: Int,
  numOfBaths: Int,
  rating: Int,
}


typeQuery{
  allListings: [Listing]!
  singleListing(id: ID!): Listing
}


type Mutation{
createListing(input: ListingInput): Listing
updateListing(input: ListingInput): Listing
deleteListing(id:ID!): Message!
}
`;

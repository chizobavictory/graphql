import HotelResolver from "./resolvers/hotel";
import UserResolver from "./resolvers/user";

export default {
    Query: {
        ...HotelResolver.Query,
        ...UserResolver.Query   
    },
    Mutation: {
        ...HotelResolver.Mutation,
        ...UserResolver.Mutation
    }
}


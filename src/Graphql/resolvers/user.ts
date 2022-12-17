import User from "../../Model/userModel";
import { CreateUser } from "./type";

const UserResolver = {
  Query: {
    allUsers: async () => {
      try {
        const listing = await User.find({});
        return listing;
      } catch (err) {
        console.log(err);
      }
    },
    singleUser: async (parent: any, args: any) => {
      try {
        const user = await User.findById(args.id);
        return user;
      } catch (err) {
        console.log(err);
      }
    },
  },
  Mutation: {
    createUser: async (_: unknown, args: CreateUser) => {
      try {
        const user = await User.create(args.input);
        return user;
      } catch (err) {
        console.log(err);
      }
    },
    deleteUser: async (_: unknown, args: any) => {
      try {
        const user = await User.findByIdAndDelete(args.id);
        if (user) {
          return { message: "User deleted successfully" };
        }
      } catch (err) {
        console.log(err);
      }
    }
  },
};


export default UserResolver;
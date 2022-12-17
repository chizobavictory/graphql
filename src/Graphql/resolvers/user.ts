import User from "../../Model/userModel";
import { CreateUser, DeleteUser, updateUser } from "./type";

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
    deleteUser: async (_: unknown, args: DeleteUser) => {
      try {
        const user = await User.findByIdAndDelete(args.id);
        if (user) {
          return { message: "User deleted successfully" };
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  updateUser: async (_: unknown, args: updateUser) => {
    try {
      const user = await User.findByIdAndUpdate(args.id, args.input, { new: true });
      if (user) {
        return { message: "User updated successfully", user };
      }
    } catch (err) {
      console.log(err);
    }
  },
};

export default UserResolver;

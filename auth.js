import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import mongoClientPromise from "./dbConnect/mongoClientPromise";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import Credentials from "next-auth/providers/credentials";
import connectMongo from "./dbConnect/connectMongo";
import { userModel } from "./models/user-model";
import bcrypt from "bcrypt";

export const {
    handlers,
    auth,
    signIn,
    signOut
} = NextAuth({
    adapter: MongoDBAdapter(mongoClientPromise, { databaseName: "organic-store" }),
    session: {
        strategy: 'jwt',
    },
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                if (credentials == null) return null;
                await connectMongo();
                try {
                    const user = await userModel.findOne({ email: credentials?.email });
                    if (user) {
                        const isMatch = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                        if (isMatch) {
                            return user;
                        } else {
                            throw new Error("Email or Password is not correct!");
                        }
                    } else {
                        throw new Error("User not found!");
                    }
                } catch (error) {
                    throw error;
                }
            },
        }),

        Google,
    ],
})
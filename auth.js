import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import mongoClientPromise from "./dbConnect/mongoClientPromise";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

export const {
    handlers,
    auth,
    signIn,
    signOut
} = NextAuth({
    adapter: MongoDBAdapter(mongoClientPromise, { databaseName: "organic-store" }),
    providers: [
        Google,
    ],
})
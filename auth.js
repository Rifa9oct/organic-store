import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import mongoClientPromise from "./dbConnect/mongoClientPromise";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import Credentials from "next-auth/providers/credentials";
import connectMongo from "./dbConnect/connectMongo";
import { userModel } from "./models/user-model";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

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
                            const accessToken = jwt.sign(
                                { id: user._id, email: user.email },
                                process.env.AUTH_SECRET,
                                { expiresIn: '1m' }
                            );
                            const refreshToken = jwt.sign(
                                { id: user._id, email: user.email },
                                process.env.AUTH_SECRET,
                                { expiresIn: '1d' }
                            );

                            return {
                                id: user._id.toString(),
                                name: user.name,
                                email: user.email,
                                image: user.image,
                                accessToken: accessToken,
                                refreshToken: refreshToken,
                            };

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
    callbacks: {
        async jwt({ token, user, account }) {

            if (account && user) {
                token.id = user.id;
                token.accessToken = jwt.sign(
                    { id: user.id, email: user.email },
                    process.env.AUTH_SECRET,
                    { expiresIn: '1m' }
                );
                token.refreshToken = jwt.sign(
                    { id: user.id, email: user.email },
                    process.env.AUTH_SECRET,
                    { expiresIn: '1d' }
                );
            }

            if (user && account.provider === 'credentials') {
                token.id = user.id;
                token.accessToken = user.accessToken;
                token.refreshToken = user.refreshToken;
            }

            return token;
        },
        async session({ session, token }) {
            session.user = {
                userId: token.id,
                name: token.name,
                email: token.email,
                image: token.picture,
                accessToken: token.accessToken,
                refreshToken: token.refreshToken,
            };
            return session;
        }
    }
})
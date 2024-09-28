import connectMongo from "@/dbConnect/connectMongo";
import { userModel } from "@/models/user-model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (request) => {
    const { name, email, password } = await request.json();

    await connectMongo();
    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = { name, email, password: hashedPassword };

    try {
        const alreadyHaveUser = await userModel.findOne({ email: newUser.email });
        if (!alreadyHaveUser) {
            await userModel.create(newUser);
            return new NextResponse("User has been created.", {
                status: 201,
            });
        }else{
            return new NextResponse("Sorry! Already have an account on this email.", {
                status: 409,
            });
        }
    } catch (err) {
        return new NextResponse(err.message, {
            status: 500,
        });
    }
};
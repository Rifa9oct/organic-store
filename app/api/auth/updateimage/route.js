import { NextResponse } from "next/server";
import connectMongo from "@/dbConnect/connectMongo";
import { authenticateRequest } from "@/utils/auth-utils";
import { userModel } from "@/models/user-model";

export const POST = async (request) => {
    try {
        const { error } = authenticateRequest(request);
        if (error) {
            return NextResponse.json({ error: "Authentication failed" }, { status: 401 });
        }

        const { image, email } = await request.json();

        if (!image || !email) {
            return NextResponse.json({ error: "Invalid or missing properties" }, { status: 400 });
        }

        await connectMongo();

        await userModel.updateOne({ email }, { image });

        return new NextResponse("Image updated successfully.", {
            status: 200,
        });
        
    } catch (err) {
        console.error("Error during the operation:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
};

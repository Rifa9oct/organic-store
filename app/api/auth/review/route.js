import { NextResponse } from "next/server";
import connectMongo from "@/dbConnect/connectMongo";
import reviewModel from "@/models/review-model";
import { authenticateRequest } from "@/utils/auth-utils";

export const POST = async (request) => {
    try {
        const { error } = authenticateRequest(request);
        if (error) return error;

        const { productId, userId, title, name, email, message } = await request.json();

        if (!productId || !userId || !title || !name || !message || !email) {
            return new NextResponse("Invalid or missing property", {
                status: 400,
            });
        }

        await connectMongo();

        const payload = { productId, userId, title, name, email, message };

        const isReview = await reviewModel.findOne({
            userId: payload.userId,
            productId: payload.productId
        });
        if (!isReview) {
            await reviewModel.create(payload);

            return new NextResponse("A review has been added", {
                status: 201,
            });
        } else {
            return new NextResponse("Already added in the review", {
                status: 409,
            });
        }
    } catch (err) {
        console.error("Error during the operation:", err);
        return new NextResponse(err.message, {
            status: 500,
        });
    }
};
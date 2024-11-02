import { NextResponse } from "next/server";
import connectMongo from "@/dbConnect/connectMongo";
import reviewModel from "@/models/review-model";
import jwt from 'jsonwebtoken';

export const POST = async (request) => {
    try {
        const authHeader = request.headers.get('authorization');
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return new NextResponse("Unauthorized: Access token is required", {
                status: 401,
            });
        }

        try {
            const decoded = jwt.verify(token, process.env.AUTH_SECRET);
        } catch (err) {
            if (err.name === 'TokenExpiredError') {
                return new NextResponse("Forbidden: Access token expired", {
                    status: 403,
                });
            }
            return new NextResponse("Unauthorized: Invalid token", {
                status: 401,
            });
        }

        const { productId, userId, name, email, message } = await request.json();

        if (!productId || !userId || !name || !message || !email) {
            return new NextResponse("Invalid or missing property", {
                status: 400,
            });
        }

        await connectMongo();

        const payload = { productId, userId, name, email, message };

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
import { NextResponse } from "next/server";
import connectMongo from "@/dbConnect/connectMongo";
import cartModel from "@/models/cart-model";
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

        const { userId, productId, title, thumbnail, quantityToBuy, totalPrice } = await request.json();

        if (!userId || !productId || !title || !thumbnail || quantityToBuy == null || totalPrice == null) {
            return new NextResponse("Invalid or missing property", {
                status: 400,
            });
        }

        await connectMongo();

        const payload = {
            userId, productId, title, thumbnail, quantityToBuy, totalPrice
        };

        const isCart = await cartModel.findOne({
            userId: payload.userId,
            productId: payload.productId
        });
        if (!isCart) {
            await cartModel.create(payload);

            return new NextResponse("A Cart has been added", {
                status: 201,
            });
        } else {
            return new NextResponse("Already added in the cart", {
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
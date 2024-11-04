import { NextResponse } from "next/server";
import connectMongo from "@/dbConnect/connectMongo";
import cartModel from "@/models/cart-model";
import { authenticateRequest } from "@/utils/auth-utils";

export const POST = async (request) => {
    try {
        const { error } = authenticateRequest(request);
        if (error) return error;

        const { userId, productId, price, title, thumbnail, quantityToBuy, totalPrice } = await request.json();

        if (!userId || !productId || !title || !thumbnail || quantityToBuy == null || totalPrice == null || price == null) {
            return new NextResponse("Invalid or missing property", {
                status: 400,
            });
        }

        await connectMongo();

        const payload = {
            userId, productId, title, thumbnail, price, quantityToBuy, totalPrice
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
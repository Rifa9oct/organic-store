import { NextResponse } from "next/server";
import connectMongo from "@/dbConnect/connectMongo";
import checkoutModel from "@/models/checkout-model";
import cartModel from "@/models/cart-model";
import { authenticateRequest } from "@/utils/auth-utils";

export const POST = async (request) => {
    try {
        const { error } = authenticateRequest(request);
        if (error) return error;

        const { userId, firstName, lastName, company, region, address, district, phoneNo, email, note, buyProducts, totalPrice, date, paymentMethod } = await request.json();

        if (!userId || !firstName || !lastName || !region || !address || !district || !phoneNo || !email || !buyProducts || !totalPrice || !date || !paymentMethod) {
            return new NextResponse("Invalid or missing property", {
                status: 400,
            });
        }

        await connectMongo();

        const payload = { userId, firstName, lastName, company, region, address, district, phoneNo, email, note, buyProducts, totalPrice, date, paymentMethod };

        await checkoutModel.create(payload);

        await cartModel.deleteMany({});

        return new NextResponse("A checkout has been completed", {
            status: 201,
        });

    } catch (err) {
        console.error("Error during the operation:", err);
        return new NextResponse(err.message, {
            status: 500,
        });
    }
};
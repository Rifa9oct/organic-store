import { NextResponse } from "next/server";
import connectMongo from "@/dbConnect/connectMongo";
import checkoutModel from "@/models/checkout-model";
import jwt from 'jsonwebtoken';
import cartModel from "@/models/cart-model";

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

        const { userId, firstName, lastName, company, region, address, district, phoneNo, email, note, buyProducts, totalPrice, date, paymentMethod } = await request.json();

        if ( !userId || !firstName || !lastName || !region || !address || !district || !phoneNo || !email || !buyProducts || !totalPrice || !date || !paymentMethod ) {
            return new NextResponse("Invalid or missing property", {
                status: 400,
            });
        }

        await connectMongo();

        const payload = { userId, firstName, lastName, company, region, address, district, phoneNo, email, note, buyProducts, totalPrice, date, paymentMethod };

        console.log(payload)

        const isCheckout = await checkoutModel.findOne({
            userId: payload.userId,
        });
        
        if (!isCheckout) {
            await checkoutModel.create(payload);

            await cartModel.deleteMany({});

            return new NextResponse("A checkout has been completed", {
                status: 201,
            });
        } else {
            return new NextResponse("Already completed the checkout", {
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
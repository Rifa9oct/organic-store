import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { userModel } from "@/models/user-model";

export const POST = async (request) => {
    try {
        const { refreshToken } = await request.json();

        if (!refreshToken) {
            return new NextResponse("Unauthorized: Refresh token is required", {
                status: 401,
            });
        }

        let decoded;
        try {
            decoded = jwt.verify(refreshToken, process.env.AUTH_SECRET);
        } catch (err) {
            return new NextResponse("Unauthorized: Invalid refresh token", {
                status: 401,
            });
        }

        const user = await userModel.findById(decoded.id);
        if (!user) {
            return new NextResponse("Unauthorized: User not found", {
                status: 401,
            });
        }

        const newAccessToken = jwt.sign(
            { id: user._id, email: user.email },
            process.env.AUTH_SECRET,
            { expiresIn: '1d' }
        );

        return new NextResponse(JSON.stringify({ accessToken: newAccessToken }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        console.error("Error during the operation:", err);
        return new NextResponse(err.message, {
            status: 500,
        });
    }
};

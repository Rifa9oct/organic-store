
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export const authenticateRequest = (request) => {
    const authHeader = request.headers.get('authorization');
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return { error: new NextResponse("Unauthorized: Access token is required", { status: 401 }) };
    }

    try {
        const decoded = jwt.verify(token, process.env.AUTH_SECRET);
        return { decoded };
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return {
                error: new NextResponse("Forbidden: Access token expired",
                    { status: 403 })
            };
        }
        return {
            error: new NextResponse("Unauthorized: Invalid token",
                { status: 401 })
        };
    }
};

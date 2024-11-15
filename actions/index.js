"use server"

import { signIn } from "@/auth";
import EmailTemplate from "@/components/checkout/EmailTemplate";
import { getDeleteCart, getDeleteReview, getUpdateCart } from "@/queries/product-queries";
import { revalidatePath } from "next/cache";
import { Resend } from "resend";

export async function login(formData) {
    try {
        await signIn("credentials", {
            email: formData.email,
            password: formData.password,
            redirect: false
        })
        return { status: 200, message: "Login completed successFully!" };
    } catch (error) {
        if (error.cause) {
            throw (error.cause.err);
        } else {
            throw error;
        }
    }
}

export async function customRevalidatePath() {
    revalidatePath("/", "/account");
    return { status: 200 };
}

export async function deleteCart(id) {
    try {
        const res = await getDeleteCart(id);
        return res;
    } catch (error) {
        throw error;
    }
}

export async function deleteReview(id) {
    try {
        const res = await getDeleteReview(id);
        return res;
    } catch (error) {
        throw error;
    }
}

export async function updateCart(productId, newQuantity) {
    try {
        const res = await getUpdateCart(productId, newQuantity);
        return res;
    } catch (error) {
        throw error;
    }
}

export async function sendEmail(user) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const sent = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: user?.email,
            subject: "Successfully checkout you products!",
            react: EmailTemplate({ user })
        });
        return sent;
    } catch (error) {
        throw error;
    }
}
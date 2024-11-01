"use server"

import { signIn } from "@/auth";
import { getDeleteCart, getUpdateCart } from "@/queries/product-queries";
import { revalidatePath } from "next/cache";

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
    revalidatePath("/");
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

export async function updateCart(productId, newQuantity) {
    try {
        const res = await getUpdateCart(productId, newQuantity);
        return res;
    } catch (error) {
        throw error;
    }
}
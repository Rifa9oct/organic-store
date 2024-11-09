"use client"

import { customRevalidatePath } from "@/actions";
import useAxios from "@/hooks/useAxios";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import { MdError } from "react-icons/md";

const Checkout = ({ userId, product }) => {
    const { axiosAuth } = useAxios();
    const { status, update } = useSession();
    const [error, setError] = useState();
    const searchParams = useSearchParams();
    const quantity = searchParams.get("quantity")?.toString();
    const router = useRouter();

    const { id: productId, title, thumbnail, price } = product;

    if (status === "unauthenticated") {
        update();
    }

    const handleClick = async () => {
        if (!quantity) {
            setError("Please set the quantity!");
            return;
        }
        if (!userId) {
            router.push("/login");
        } else {
            setError(null);
            await addToCart();
            router.push("/checkout");
        }
    };

    const payload = {
        userId, productId, title, thumbnail, price,
        quantityToBuy: parseInt(quantity),
        totalPrice: (parseInt(quantity) * price).toFixed(2)
    }

    const addToCart = async () => {
        try {
            const res = await axiosAuth.post("/api/auth/addcart", payload);

            if (res.status === 201) {
                const res = await customRevalidatePath();

                if (res.status === 200) {
                    router.push("/checkout");
                }
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <button
                onClick={handleClick}
                className="hover:bg-lime-600 border border-[#8BC34A] text-[#8BC34A] hover:text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2  transition">
                <BsCartCheck className="font-bold" />Checkout
            </button>
            {
                error && (
                    <div className="flex mt-2 gap-1 items-center text-md justify-center text-red-500">
                        <MdError />
                        {error}
                    </div>
                )
            }
        </div>
    );
};

export default Checkout;

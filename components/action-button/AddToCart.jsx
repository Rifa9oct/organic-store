"use client"

import { customRevalidatePath } from "@/actions";
import useAxios from "@/hooks/useAxios";
import { useSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdError } from "react-icons/md";
import Swal from "sweetalert2";

const AddToCart = ({ userId, product }) => {
    const { axiosAuth } = useAxios();
    const { status, update } = useSession();
    const [error, setError] = useState();
    const searchParams = useSearchParams();
    const router = useRouter();
    const quantity = searchParams.get("quantity")?.toString();

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
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Successfully added to the cart.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        } catch (error) {
            if (error.status === 409) {
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: `${error.response.data}`,
                });
            }
        }
    };

    return (
        <div>
            <button
                onClick={handleClick}
                className="bg-lime-600 hover:bg-lime-500 text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 transition">
                <HiOutlineShoppingBag />Addtocart
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

export default AddToCart;

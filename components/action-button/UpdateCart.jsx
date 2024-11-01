"use client"

import { updateCart } from "@/actions";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UpdateCart = () => {
    const [active, setActive] = useState(false);
    const [productId, setProductId] = useState();
    const searchParams = useSearchParams();
    const quantity = searchParams.get("quantity")?.toString();
    const getProductId = searchParams.get("id")?.toString();

    useEffect(() => {
        if (quantity) {
            setActive(true);
        }
        if (getProductId) {
            setProductId (getProductId);
        }
    }, [quantity,getProductId ])

    const handleClick = async () => {
        const res = await updateCart(productId, quantity);

        if (res.status === 200) {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Successfully updated your cart.",
                showConfirmButton: false,
                timer: 1500
            });
            setActive(false)
        }
    }

    return (
        <>
            <button
                onClick={handleClick}
                disabled={!active}
                type="submit"
                className={`${active ? "bg-lime-600 hover:bg-lime-500 text-white" : "bg-gray-300 text-gray-500"} font-poppins w-[130px] lg:w-[160px] text-sm lg:text-base uppercase py-2 border rounded-md transition font-medium m-4`}>Update cart
            </button>
        </>
    );
};

export default UpdateCart;
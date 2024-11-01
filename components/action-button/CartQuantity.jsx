"use client"

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const CartQuantity = ({ product }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [quantity, setQuantity] = useState(product.quantityToBuy);

    const handleChange = (e) => {
        const newQuantity = e.target.value;
        const params = new URLSearchParams(searchParams);
        setQuantity(newQuantity);

        if (newQuantity) {
            params.set('quantity', newQuantity);
            params.set('id', product.productId);
        } else {
            params.delete('quantity');
            params.delete('id');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <>
            <input
                onChange={handleChange}
                type="number" min="0"
                value={quantity}
                inputMode="numeric" className="p-2 border w-[65px] focus:outline-dotted" />
        </>
    );
};

export default CartQuantity;
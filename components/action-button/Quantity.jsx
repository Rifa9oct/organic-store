"use client"

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const Quantity = ({ totalQuantity }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const quantity = searchParams.get("quantity")?.toString();

    const [selectQuantity, setSelectQuantity] = useState(0);

    const updateParamsAndState = (newQuantity) => {
        const params = new URLSearchParams(searchParams);
        setSelectQuantity(newQuantity);

        if (newQuantity) {
            params.set('quantity', newQuantity);
        } else {
            params.delete('quantity');
        }
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    const increment = () => {
        if (selectQuantity < totalQuantity) {
            updateParamsAndState(selectQuantity + 1);
        }
    }

    const decrement = () => {
        if (selectQuantity > 0) {
            updateParamsAndState(selectQuantity - 1);
        }
    };

    return (
        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
            <button
                onClick={decrement}
                className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
            >-</button>
            <div className="h-8 w-8 text-base flex items-center justify-center">{`${quantity? quantity : selectQuantity}`}</div>
            <button
                onClick={increment}
                className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
            >+</button>
        </div>
    );
};

export default Quantity;

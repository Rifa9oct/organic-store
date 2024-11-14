"use client"

import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

const SeeMoreReviews = ({ dict }) => {
    const [seeReview, setSeeReview] = useState(false)
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    useEffect(() => {
        const params = new URLSearchParams(searchParams);

        if (seeReview) {
            params.set('see_review', seeReview);
            replace(`${pathname}?${params.toString()}`);
        } else {
            params.delete('quantity');
            replace('http://localhost:3000');
        }
    }, [pathname, seeReview, replace, searchParams])

    return (
        <>
            <button
                onClick={() => setSeeReview(!seeReview)}
                className="animate-bounce mt-4 shadow-lg shadow-black transition bg-black hover:bg-lime-500 text-white px-[15px] py-3 rounded-full">
                {
                    seeReview ? (
                        <div className="flex items-center">
                            <FaArrowUpLong />
                            <p>{dict.Less}</p>
                        </div>

                    ) : (
                        <div className="flex items-center">
                            <FaArrowDownLong />
                            <p>{dict.More}</p>
                        </div>
                    )
                }
            </button>
        </>
    );
};

export default SeeMoreReviews;
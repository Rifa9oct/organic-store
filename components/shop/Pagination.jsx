"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Pagination = ({ totalProducts }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const numberOfPages = Math.ceil(totalProducts / 9);
    const pages = [...Array(numberOfPages).keys()].map(i => i + 1);

    const params = new URLSearchParams(searchParams);

    if (currentPage > 1) {
        params.set('page', currentPage);
    } else {
        params.delete('page');
    }

    replace(`${pathname}?${params.toString()}`);
   
    return (
        <div className="flex items-center mt-[60px]">
            {
                currentPage > 1 && (
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        className="border w-[40px] h-[40px] hover:bg-lime-500 pl-3 text-lime-500 hover:text-white border-lime-500 mr-2"><FaArrowLeftLong /></button>
                )
            }


            {
                pages.map(page => (
                    <>
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`${currentPage === page ? "bg-lime-500 text-white" : ""} font-poppins border w-[40px] h-[40px] text-lg hover:bg-lime-500 text-lime-500 hover:text-white border-lime-500 mr-2`}>{page}</button>
                    </>
                ))
            }

            {
                currentPage !== pages.length && (
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className="border w-[40px] h-[40px] hover:bg-lime-500 pl-3 text-lime-500 hover:text-white border-lime-500"><FaArrowRightLong /></button>
                )
            }
        </div>
    );
};

export default Pagination;
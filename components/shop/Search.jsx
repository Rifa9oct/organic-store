"use client"

import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import useDebounce from "@/hooks/useDebounce";
import { FaAngleRight } from "react-icons/fa";

const Search = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const doSearch = useDebounce((term) => {
        const params = new URLSearchParams(searchParams);

        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        
        replace(`${pathname}?${params.toString()}`);

    }, 500);

    function handleSearch(term) {
        doSearch(term);
    }

    return (
        <div className="relative font-poppins flex gap-2 items-center">
            <span className="absolute left-3 top-4 text-xl text-gray-400">
                <PiMagnifyingGlassDuotone />
            </span>
            <input
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                className="border w-full py-3 pl-10 rounded-md focus:border-lime-500 outline-none"
                type="text" placeholder="search products..."
            />

            <button className="bg-lime-600 text-lg rounded-md text-center text-white w-[35px] h-[47px] pl-2 "><FaAngleRight /></button>
        </div>

    );
};

export default Search;
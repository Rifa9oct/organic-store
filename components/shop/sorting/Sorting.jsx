"use client"

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Sorting = () => {
    const [sortValue, setSortValue] = useState();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleChange = (e) => {
        const selectedValue = e.target.value.replace("Sort by ", "");
        setSortValue(selectedValue);
    }

    useEffect(() => {
        const params = new URLSearchParams(searchParams);

        if (sortValue) {
            params.set('sort', sortValue);
        } else {
            params.delete('sort');
        }

        replace(`${pathname}?${params.toString()}`);

    }, [searchParams, pathname, replace, sortValue]);

    return (
        <div>
            <select
                value={sortValue}
                onChange={handleChange}
                className="font-poppins p-2 outline-lime-500 cursor-pointer"
            >
                <option value="Default Sorting" defaultValue="Default Sorting">Default sorting</option>
                <option value="Sort by popularity">Sort by popularity</option>
                <option value="Sort by latest">Sort by latest</option>
                <option value="Sort by low to high">Sort by low to high</option>
                <option value="Sort by high to low">Sort by high to low</option>
            </select>
        </div>
    );
};

export default Sorting;
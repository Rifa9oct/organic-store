"use client"

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MdError } from 'react-icons/md';

const Price = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [price, setPrice] = useState({ min: '', max: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPrice((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        const min = parseFloat(price.min);
        const max = parseFloat(price.max);

        if (price.min && price.max && min > max || min === max) {
            setError("Min value can't be greater and equal than Max value.");
        } else {
            setError("");
        }

        if (price.min && price.max && error === "") {
            params.set('min', price.min);
            params.set('max', price.max);
        } else {
            params.delete('min');
            params.delete('max');
        }
        replace(`${pathname}?${params.toString()}`);

    }, [price, searchParams, pathname, replace, error]);

    return (
        <div className="pt-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-8">Price</h3>
            <div className="font-poppins mt-4 flex items-center">
                <input
                    onChange={handleChange}
                    value={price.min}
                    type="text" name="min" id="min"
                    className="w-full border focus:border-lime-500 outline-none rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                    placeholder="min" />
                <span className="mx-3 text-gray-500">-</span>
                <input
                    onChange={handleChange}
                    value={price.max}
                    type="text" name="max" id="max"
                    className="w-full border focus:border-lime-500 outline-none rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                    placeholder="max" />
            </div>
            {
                error && (
                    <p className="font-poppins text-sm mt-1 text-red-500"><MdError className="text-lg inline" /> {error}</p>
                )
            }
        </div>
    );
};

export default Price;
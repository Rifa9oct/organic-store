import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import NavList from './NavList';

const Navbar = () => {
    return (
        <div className='relative z-50 flex justify-between items-center py-4 mx-8'>
            <div className='flex gap-6 items-center text-gray-500'>
                <Link href="/">
                    <Image src="/logo.png" width={150} height={70} alt="Logo" />
                </Link>

                <div className='hidden lg:flex gap-6'>
                    <Link href="/shop">Everything</Link>
                    <Link href="/groceries">Groceries</Link>
                    <Link href="/juice">Juice</Link>
                </div>
            </div>

            <div className='hidden lg:flex gap-6 items-center text-gray-500'>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/cart" className='relative'>
                    <div className='flex items-center gap-2 text-lime-500'>
                        <span className='font-medium'>£0.00</span>
                        <TiShoppingCart className='text-2xl' />
                        <div
                            className="absolute -right-3 -top-[6px] w-5 h-5 rounded-full flex items-center justify-center bg-lime-500 font-bold text-black text-xs">
                            0
                        </div>
                    </div>
                </Link>
                <Link href="/account"><FaUser className='text-xl text-black' /></Link>
            </div>

            <NavList />
        </div>
    );
};

export default Navbar;
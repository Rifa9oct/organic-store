"use client"

import Link from "next/link";
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { PiListBold } from "react-icons/pi";
import { TiShoppingCart } from "react-icons/ti";

const NavList = () => {
    const [show, setShow] = useState(false);
    return (
        <div
            onClick={() => setShow(!show)}
            className='lg:hidden text-xl'>
            <div className="flex items-center gap-6 pl-6">
                <div>
                    <Link href="/cart" className='relative'>
                        <div className='flex text-base items-center gap-2 text-lime-500'>
                            <span className='font-medium'>£0.00</span>
                            <TiShoppingCart className='text-2xl' />
                            <div
                                className="absolute -right-3 -top-[6px] w-5 h-5 rounded-full flex items-center justify-center bg-lime-500 font-bold text-black text-xs">
                                0
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="bg-lime-500 p-2 rounded"><PiListBold /></div>
                {
                    show && (
                        <div
                            className="flex flex-col shadow-lg transition rounded-md text-base text-black bg-lime-200 list-none">
                            <Drawer
                                open={show}
                                onClose={() => setShow(!show)}
                                direction='right'
                                className="flex flex-col py-6 text-base text-black list-none"
                            >
                                <li className="pl-6 pb-5"><Link href="/account"><FaUser className='text-xl text-black mt-10' /></Link></li>
                                <li className="border-t-2 py-5 pl-6"><Link href="/shop">Everything</Link></li>
                                <li className="border-t-2 py-5 pl-6"><Link href="/groceries">Groceries</Link></li>
                                <li className="border-t-2 py-5 pl-6"><Link href="/juice">Juice</Link></li>
                                <li className="border-t-2 py-5 pl-6"><Link href="/about">About</Link></li>
                                <li className="border-t-2 py-5 pl-6"><Link href="/contact">Contact</Link></li>
                            </Drawer>
                        </div>
                    )
                }
            </div>
        </div >
    );
};

export default NavList;
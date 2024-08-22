"use client"

import Link from "next/link";
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { PiListBold } from "react-icons/pi";
import Cart from "../cart/Cart";
import { RxCrossCircled } from "react-icons/rx";

const NavList = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div
                onClick={() => setShow(true)}
                className='lg:hidden text-xl'>
                <div className="bg-lime-500 p-2 rounded"><PiListBold /></div>
            </div >

            <div>
                {
                    show && (
                        <div
                            className="flex flex-col shadow-lg transition rounded-md text-base text-black bg-lime-200 list-none">
                            <Drawer
                                open={show}
                                onClose={() => setShow(!show)}
                                size={300}
                                direction='right'
                                className="flex flex-col py-6 text-base text-black list-none"
                            >
                                <div onClick={() => setShow(false)} className="ml-[250px] w-[30px]">
                                    <RxCrossCircled className='text-[30px] cursor-pointer text-gray-400' />
                                </div>

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
        </>
    );
};

export default NavList;
"use client"

import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useEffect, useState } from "react";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { PiListBold, PiSignOutBold } from "react-icons/pi";
import { RxCrossCircled } from "react-icons/rx";
import Image from "next/image";
import { signOut } from "next-auth/react";
import CustomLink from './CustomLink';
import { usePathname } from 'next/navigation';

const NavList = ({ user, dict }) => {
    const [show, setShow] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setShow(false);
    }, [pathname]);

    return (
        <>
            <div
                onClick={() => setShow(!show)}
                className='lg:hidden text-lg'>
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

                                <li className="pl-6 pb-5">
                                    {
                                        user ? (
                                            <CustomLink path="/account">
                                                {
                                                    user?.image ? (
                                                        <div className="w-[40px] h-[40px] border border-lime-500 rounded-full overflow-hidden">
                                                            <Image src={user?.image} width={40} height={40} alt="user-info" />
                                                        </div>) : (
                                                        <FaUserCircle className="text-[50px]" />
                                                    )
                                                }
                                            </CustomLink>
                                        ) : (
                                            <CustomLink path="/login" ><FaUser className='text-lg text-black' /></CustomLink>
                                        )
                                    }
                                </li>

                                <li className="border-t-2 py-5 pl-6"><CustomLink path="/shop">{dict.Everything}</CustomLink></li>
                                <li className="border-t-2 py-5 pl-6"><CustomLink path="/groceries">{dict.Groceries}</CustomLink></li>
                                <li className="border-t-2 py-5 pl-6"><CustomLink path="/juice">{dict.Juice}</CustomLink></li>
                                <li className="border-t-2 py-5 pl-6"><CustomLink path="/about">{dict.About}</CustomLink></li>
                                <li className="border-y-2 py-5 pl-6"><CustomLink path="/contact">{dict.Contact}</CustomLink></li>

                                <li>
                                    {
                                        user && (
                                            <div className="flex items-center pt-5 px-4 text-black  font-bold">
                                                <PiSignOutBold className="text-lg mr-2" />
                                                <button
                                                    onClick={() => {
                                                        signOut({ callbackUrl: "/login" })
                                                    }}
                                                    className="hover:text-lime-500"
                                                >{dict.SignOut}</button>
                                            </div>
                                        )
                                    }
                                </li>
                            </Drawer>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default NavList;
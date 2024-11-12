"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { PiSignOutBold } from "react-icons/pi";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";

const Account = ({ user }) => {
    const [show, setShow] = useState(false);
    const pathname = usePathname();
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (pathname.includes("account")) {
            setShow(false);
        }
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShow(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [pathname]);

    return (
        <div className="relative" ref={dropdownRef}>
            <button onClick={() => setShow(!show)}>
                {
                    user?.image ? (
                        <div className="w-[40px] h-[40px] border border-lime-500 rounded-full overflow-hidden">
                            <Image src={user?.image} width={40} height={40} alt="user-info" />
                        </div>
                    ) : (
                        <FaUserCircle className="text-[50px]" />
                    )
                }
            </button>
            {
                show && (
                    <div className="absolute w-[280px] h-[200px] bg-lime-50 shadow-lg rounded-lg right-0 top-15 transition py-8">
                        <div className="flex items-center gap-4 text-black border-b-2 px-4 pb-8">
                            {
                                user?.image ? (
                                    <div className="w-[50px] h-[50px] rounded-full border border-lime-500 overflow-hidden">
                                        <Image src={user?.image} width={50} height={50} alt="user-info" />
                                    </div>
                                ) : (
                                    <FaUserCircle className="text-[50px]" />
                                )
                            }

                            <div>
                                <Link href="/account" className="font-bold hover:text-lime-500">{user?.name}</Link>
                                <p className="text-sm">{user?.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center pt-5 px-4 text-black  font-bold">
                            <PiSignOutBold className="text-xl mr-2" />
                            <button
                                onClick={() => {
                                    signOut({ callbackUrl: "/login" })
                                }}
                                className="hover:text-lime-500"
                            >Sign Out</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Account;
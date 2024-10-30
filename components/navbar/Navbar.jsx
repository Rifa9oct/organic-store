import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaUser } from "react-icons/fa";
import NavList from './NavList';
import Cart from '../cart/Cart';
import { auth } from '@/auth';
import Account from '../account/Account';
import { getCartByUserId } from '@/queries/product-queries';

const Navbar = async ({ sideBar }) => {
    const session = await auth();
    const user = session?.user;
    const carts = await getCartByUserId(user?.userId);
    const totalPrice = carts.reduce((total, cart) => total + cart.totalPrice, 0).toFixed(2);

    return (
        <div className='font-poppins relative z-50 flex justify-between items-center py-4 lg:mx-8'>
            <div className='flex gap-6 items-center text-gray-600'>
                <Link href="/">
                    <Image src="/logo.png" width={150} height={70} alt="Logo" />
                </Link>

                {
                    sideBar && (
                        <div className='hidden text-lg lg:flex gap-6'>
                            <Link href="/shop">Everything</Link>
                            <Link href="/groceries">Groceries</Link>
                            <Link href="/juice">Juice</Link>
                        </div>
                    )
                }
            </div>

            {
                sideBar && (
                    <>
                        <div className='hidden text-lg lg:flex gap-6 items-center text-gray-500'>
                            <Link href="/about">About</Link>
                            <Link href="/contact">Contact</Link>

                            <Cart cartLength={carts?.length} totalPrice={totalPrice}/>

                            {
                                user ? (<Account user={user} />) : (
                                    <Link href="/login" ><FaUser className='text-xl text-black' /></Link>
                                )
                            }
                        </div>

                        <div className="lg:hidden flex items-center gap-6">
                            <Cart cartLength={carts?.length} totalPrice={totalPrice} />
                            <NavList />
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default Navbar;
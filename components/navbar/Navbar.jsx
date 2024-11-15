import Image from 'next/image';
import React from 'react';
import { FaUser } from "react-icons/fa";
import NavList from './NavList';
import Cart from '../cart/Cart';
import { auth } from '@/auth';
import Account from '../account/Account';
import { getCartByUserId } from '@/queries/product-queries';
import { getUserByEmail } from '@/queries/user-queries';
import { getDictionary } from '@/app/[lang]/dictionaries/dictionaries';
import CustomLink from './CustomLink';

const Navbar = async ({ sideBar, lang }) => {
    const dict = await getDictionary(lang);
    const session = await auth();
    const getUser = await getUserByEmail(session?.user?.email);
    const user = getUser[0];
    const carts = await getCartByUserId(user?.id);

    return (
        <div className='font-poppins relative z-50 flex justify-between items-center py-4 lg:mx-8'>
            <div className='flex gap-6 items-center text-gray-600'>
                <CustomLink path="/">
                    <Image src="/logo.png" width={150} height={70} alt="Logo" />
                </CustomLink>

                {
                    sideBar && (
                        <div className='hidden text-xl lg:flex gap-6'>
                            <CustomLink path="/shop">{dict.Everything}</CustomLink>
                            <CustomLink path="/groceries">{dict.Groceries}</CustomLink>
                            <CustomLink path="/juice">{dict.Juice}</CustomLink>
                        </div>
                    )
                }
            </div>

            {
                sideBar && (
                    <>
                        <div className='hidden text-xl lg:flex gap-6 items-center text-gray-500'>
                            <CustomLink path="/about">{dict.About}</CustomLink>
                            <CustomLink path="/contact">{dict.Contact}</CustomLink>

                            <Cart dict={dict} carts={carts} />

                            {
                                user ? (<Account dict={dict} user={user} />) : (
                                    <CustomLink path="/login" ><FaUser className='text-xl text-black' /></CustomLink>
                                )
                            }
                        </div>

                        <div className="lg:hidden flex items-center gap-6">
                            <Cart dict={dict} carts={carts} />
                            <NavList dict={dict} user={user} />
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default Navbar;
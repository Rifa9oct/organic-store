"use client"

import { useEffect, useState } from 'react';
import Drawer from 'react-modern-drawer';
import { TiShoppingCart } from 'react-icons/ti';
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';
import Image from 'next/image';
import { RxCrossCircled } from "react-icons/rx";


const Cart = () => {
    const [show, setShow] = useState(false);

    const [drawerSize, setDrawerSize] = useState(520);

    useEffect(() => {
        const updateDrawerSize = () => {
            if (window.innerWidth < 768) {
                setDrawerSize(425);
            } else {
                setDrawerSize(520);
            }
        };

        updateDrawerSize();

        // Update the size on window resize
        window.addEventListener('resize', updateDrawerSize);

        return () => window.removeEventListener('resize', updateDrawerSize);
    }, []);

    return (
        <div>
            <div
                onClick={() => setShow(true)}
                className='relative'
            >
                <div className='flex items-center gap-2 text-lime-500 cursor-pointer'>
                    <span className='font-medium'>£0.00</span>
                    <TiShoppingCart className='text-2xl' />
                    <div
                        className="absolute -right-3 -top-[6px] w-5 h-5 rounded-full flex items-center justify-center bg-lime-500 font-bold text-black text-xs">
                        0
                    </div>
                </div>
            </div>

            {
                show && (
                    <div
                        className="flex flex-col shadow-lg transition rounded-md text-base text-black bg-lime-200">
                        <Drawer
                            open={show}
                            onClose={() => setShow(!show)}
                            direction='right'
                            size={drawerSize}
                            lockBackgroundScroll
                            className="drawer-content text-sm lg:text-base flex flex-col py-6 text-black list-none"
                        >
                            <div>
                                <div className='flex justify-between items-center border-b-2 pb-3 px-5'>
                                    <h3 className='text-gray-600'>Shopping Cart</h3>
                                    <div onClick={() => setShow(false)}>
                                        <RxCross2 className='text-xl cursor-pointer' />
                                    </div>
                                </div>

                                <div className='h-screen-minus overflow-y-auto'>
                                    {/* <h2 className='text-gray-500'>No products in the cart.</h2> */}

                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-4 p-6'>
                                            <Image src="/grocery1.png" width={64} height={64} alt='product' />
                                            <div className='text-gray-600'>
                                                <h3>Hand Sanitizer</h3>
                                                <h3>1 × £15.00</h3>
                                            </div>
                                        </div>
                                        <p className='mr-5'>< RxCrossCircled className='text-2xl text-gray-400' /></p>
                                    </div>
                                </div>

                                <div className='flex justify-between p-5 text-gray-600 py-3 border-y-2'>
                                    <h3>Subtotal</h3>
                                    <h3>£15.00</h3>
                                </div>

                                <div className='m-5'>
                                    <Link href="/cart">
                                        <button
                                            onClick={() => setShow(false)}
                                            className='uppercase rounded-md hover:bg-lime-500 bg-lime-600 py-3 w-full text-white transition'
                                        >View Cart</button>
                                    </Link>
                                </div>

                                <div className='m-5'>
                                    <button
                                        className='uppercase rounded-md hover:bg-lime-500 bg-lime-600 py-3 w-full text-white transition'
                                    >Continue Shopping</button>
                                </div>
                            </div>
                        </Drawer>
                    </div>
                )
            }
        </div>
    );
};

export default Cart;
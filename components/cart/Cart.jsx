"use client"

import { useEffect, useState } from 'react';
import Drawer from 'react-modern-drawer';
import { TiShoppingCart } from 'react-icons/ti';
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';
import Image from 'next/image';
import DeleteCart from '../action-button/DeleteCart';

const Cart = ({ carts }) => {
    const [show, setShow] = useState(false);
    const [drawerSize, setDrawerSize] = useState(520);

    const totalPrice = carts?.reduce((total, cart) => total + cart.totalPrice, 0).toFixed(2);

    useEffect(() => {
        const updateDrawerSize = () => {
            if (window.innerWidth < 768) {
                setDrawerSize(425);
            } else {
                setDrawerSize(520);
            }
        };

        const handleBodyScroll = (lock) => {
            if (lock) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        };

        updateDrawerSize();
        handleBodyScroll(show);

        // Update the size on window resize
        window.addEventListener('resize', updateDrawerSize);

        return () => {
            window.removeEventListener('resize', updateDrawerSize);
            handleBodyScroll(false);
        }

    }, [show]);

    return (
        <div>
            <div
                onClick={() => setShow(true)}
                className='relative'
            >
                <div className='flex items-center gap-2 text-lime-500 cursor-pointer'>
                    <span className='font-medium'>£{totalPrice}</span>
                    <TiShoppingCart className='text-2xl' />
                    <div
                        className="absolute -right-3 -top-[6px] w-5 h-5 rounded-full flex items-center justify-center bg-lime-500 font-bold text-black text-xs">
                        {carts.length}
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
                                    {
                                        carts?.length > 0 ? (
                                            <>
                                                {
                                                    carts?.map(cart => (
                                                        <div key={cart.id} className='flex items-center justify-between'>
                                                            <div className='flex items-center gap-4 p-6'>
                                                                <Image src={cart.thumbnail} width={64} height={64} alt='product' className='border-2 p-1' />
                                                                <div className='text-gray-600'>
                                                                    <h3>{cart.title}</h3>
                                                                    <h3>{cart.quantityToBuy} × £{cart.price}</h3>
                                                                </div>
                                                            </div>

                                                           <DeleteCart productId={cart.productId}/>
                                                        </div>
                                                    ))
                                                }
                                            </>
                                        ) : (
                                            <div className='flex justify-center items-center h-screen-minus'>
                                                <h2 className='text-gray-500 text-xl'>No products in the cart.</h2>
                                            </div>
                                        )
                                    }
                                </div>

                                <div className='flex justify-between p-5 text-gray-600 py-3 border-y-2'>
                                    <h3>Subtotal</h3>
                                    <h3>£{totalPrice}</h3>
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
                                    <Link href="/shop">
                                        <button
                                            onClick={() => setShow(false)}
                                            className='uppercase rounded-md hover:bg-lime-500 bg-lime-600 py-3 w-full text-white transition'
                                        >Continue Shopping</button>
                                    </Link>
                                </div>
                            </div>
                        </Drawer>
                    </div >
                )
            }
        </div >
    );
};

export default Cart;
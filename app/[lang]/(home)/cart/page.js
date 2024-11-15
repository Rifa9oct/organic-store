import { auth } from "@/auth";
import CartQuantity from "@/components/action-button/CartQuantity";
import DeleteCart from "@/components/action-button/DeleteCart";
import UpdateCart from "@/components/action-button/UpdateCart";
import { getCartByUserId } from "@/queries/product-queries";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Organic Store | Cart",
    description: "Cart page description",
};

const CartPage = async () => {
    const session = await auth();
    const user = session?.user;
    const carts = await getCartByUserId(user?.userId);
    const totalPrice = carts?.reduce((total, cart) => total + cart.totalPrice, 0).toFixed(2);

    return (
        <div className="bg-[#F8F6F3]">
            <div className="max-w-[1320px] mx-auto pt-[50px] pb-20">
                <h1 className={`${carts.length === 0 ? "border-lime-500 border-b-[3px] pb-2 mb-10" : ""} text-[30px] font-bold pb-2 mb-10 mx-5 lg:mx-0`}>Cart</h1>

                {
                    carts.length === 0 ? (
                        <div className="flex flex-col justify-center items-center">
                            <Image src="/img5.png" width={300} height={200} alt="empty cart" />
                            <p className="mt-5 text-lg">Your cart is currently empty.</p>
                            <Link href="/shop"
                                className="my-3 block text-sm md:text-base font-poppins uppercase py-3 px-4 text-center text-white bg-lime-600 border rounded-md hover:bg-lime-500 transition font-medium">Return to shop
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className="border-2 m-8 lg:m-0">
                                <div className="hidden lg:block">
                                    <div className="flex justify-between border-b-2 px-5 py-3 bg-white font-bold text-lg font-poppins">
                                        <p className="w-[20%]"></p>
                                        <div className="flex justify-between w-[80%]">
                                            <p className="w-[274px]">Product</p>
                                            <p className="w-[134px]">Price</p>
                                            <p className="w-[178px]">Quantity</p>
                                            <p className="w-[170px]">Subtotal</p>
                                        </div>
                                    </div>

                                    {
                                        carts.map(cart => (
                                            <div key={cart.id} className="flex lg:flex-row flex-col p-5 border-b-2">
                                                <div className="w-[20%] flex items-center pl-8 gap-10">
                                                    <DeleteCart productId={cart.productId} />
                                                    <Image src={cart.image} width={64} height={64} alt='product' />
                                                </div>

                                                <div key={cart.id} className="flex w-[80%] justify-between items-center font-poppins text-lg text-gray-600">
                                                    <p className="w-[274px] text-lime-500">{cart.title}</p>
                                                    <p className="w-[134px]">£{cart.price}</p>
                                                    <p className="w-[178px]">
                                                        <CartQuantity product={cart} />
                                                    </p>
                                                    <p className="w-[170px]">£{cart.totalPrice}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                                {/* for mobile and tablet */}
                                <div className="lg:hidden flex flex-col">
                                    {
                                        carts.map(cart => (
                                            <div key={cart.id}>
                                                <div className="flex justify-center items-center py-3 gap-10">
                                                    <DeleteCart productId={cart.productId} />
                                                    <Image src={cart.image} width={64} height={64} alt='product' />
                                                </div>

                                                <div className="border-y-2">
                                                    <div className="flex justify-between p-3">
                                                        <p>Product:</p>
                                                        <p className="text-lime-500">{cart.title}</p>
                                                    </div>
                                                    <div className="flex justify-between border-t-2 items-center p-3">
                                                        <p>Price:</p>
                                                        <p>£{cart.price}</p>
                                                    </div>
                                                    <div className="flex justify-between border-t-2 items-center p-3">
                                                        <p>Quantity:</p>
                                                        <CartQuantity product={cart} />
                                                    </div>
                                                    <div className="flex justify-between border-t-2 items-center p-3">
                                                        <p>Subtotal:</p>
                                                        <p>£{cart.totalPrice}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className="w-full text-end">
                                    <UpdateCart />
                                </div>
                            </div>

                            <div className="flex justify-center lg:justify-end">
                                <div className="border-2 mt-10 w-[80%] lg:w-[50%]">
                                    <h3 className="font-bold text-2xl border-b-2 bg-white px-5 py-3 ">Cart totals</h3>

                                    <div className="p-5">
                                        <div className="flex justify-between text-gray-600 font-poppins pt-[14px] pb-[14px] text-sm md:text-lg border-gray-300 border-b">
                                            <h5 className="w-[40%]">Subtotal</h5>
                                            <p className="w-[60%]">£{totalPrice}</p>
                                        </div>

                                        <div className="flex justify-between text-gray-600 font-poppins pt-[14px] pb-[14px] text-sm md:text-lg border-gray-300 border-b">
                                            <p className="w-[40%]">Total</p>
                                            <p className="w-[60%]">£{totalPrice}</p>
                                        </div>

                                        <Link href="/checkout"
                                            className="mt-8 mb-3 block text-sm md:text-base font-poppins uppercase w-full py-3 px-4 text-center text-white bg-lime-600 border rounded-md hover:bg-lime-500 transition font-medium">Proceed to Checkout
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default CartPage;
import Image from "next/image";
import Link from "next/link";
import { RxCrossCircled } from "react-icons/rx";

export const metadata = {
    title: "Organic Store | Cart",
    description: "Cart page description",
};

const CartPage = () => {
    return (
        <div className="bg-[#F8F6F3]">
            <div className="max-w-[1320px] mx-auto pt-[50px] pb-20">
                <h1 className="text-[30px] font-bold pb-2 mb-10 mx-5 lg:mx-0">Cart</h1>

                <div className="border-2 m-6 lg:m-0">
                    <div className="lg:hidden flex flex-row-reverse justify-center items-center gap-10 m-5">
                        <p>< RxCrossCircled className='text-3xl text-[#adabab]' /></p>
                        <Image src="/grocery1.png" width={64} height={64} alt='product' />
                    </div>

                    <div className="flex justify-between border-y-2 lg:border-y-0 lg:border-b-2 px-5 py-3 bg-white font-bold text-sm md:text-lg font-poppins">
                        <p className="w-[20%] hidden lg:block"></p>
                        <div className="flex justify-between w-full lg:w-[80%]">
                            <p className="w-[274px]">Product</p>
                            <p className="w-[134px]">Price</p>
                            <p className="w-[178px]">Quantity</p>
                            <p className="w-[170px]">Subtotal</p>
                        </div>
                    </div>
                    <div className="flex p-5 border-b-2">
                        <div className="hidden lg:flex items-center pl-8 gap-10 w-[20%]">
                            <p>< RxCrossCircled className='text-3xl text-[#adabab]' /></p>
                            <Image src="/grocery1.png" width={64} height={64} alt='product' />
                        </div>

                        <div className="flex justify-between items-center w-full lg:w-[80%] font-poppins text-sm md:text-lg text-gray-600">
                            <p className="w-[274px] text-lime-500">Assorted Coffee</p>
                            <p className="w-[134px]">£35.00</p>
                            <p className="w-[178px]">
                                <input type="number" min="0" defaultValue="1" inputMode="numeric" className="p-2 border w-[65px] focus:outline-dotted" />
                            </p>
                            <p className="w-[170px]">£35.00</p>
                        </div>
                    </div>

                    <div className="w-full text-end">
                        <button type="submit"
                            className="font-poppins w-[130px] lg:w-[160px] text-sm lg:text-base uppercase py-2 text-white bg-lime-600 border rounded-md hover:bg-lime-500 transition font-medium m-4">Update cart
                        </button>
                    </div>
                </div>


                <div className="flex justify-center lg:justify-end">
                    <div className="border-2 mt-10 w-[80%] lg:w-[50%]">
                        <h3 className="font-bold text-2xl border-b-2 bg-white px-5 py-3 ">Cart totals</h3>

                        <div className="p-5">
                            <div className="flex justify-between text-gray-600 font-poppins pt-[14px] pb-[14px] text-sm md:text-lg border-gray-300 border-b">
                                <h5 className="w-[40%]">Subtotal</h5>
                                <p className="w-[60%]">£35.00</p>
                            </div>

                            <div className="flex justify-between text-gray-600 font-poppins pt-[14px] pb-[14px] text-sm md:text-lg border-gray-300 border-b">
                                <p className="w-[40%]">Total</p>
                                <p className="w-[60%]">£35.00</p>
                            </div>

                            <Link href="/checkout"
                                className="my-5 block text-sm md:text-base font-poppins uppercase w-full py-3 px-4 text-center text-white bg-lime-600 border rounded-md hover:bg-lime-500 transition font-medium">Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceItems = () => {
    return (
        <div className="relative mb-[140px]">
            <div className="absolute left-[30%] md:left-[40%] lg:left-[45%] -top-8 w-[162px] h-[69px]">
                <Image src="/leaf.png" width={162} height={69} alt="banner" />
            </div>

            <div className="bg-[#F8F6F3] py-[100px]">
                <div className="max-w-[1200px] mx-auto flex flex-col gap-6 lg:flex-row justify-between">
                    <div className="p-8 mx-auto lg:mx-0 w-[370px] h-[360px] bg-white rounded-lg shadow-lg">
                        <h1 className="text-2xl font-bold">Farm Fresh Fruits</h1>
                        <p className="text-gray-500 my-2 font-poppins">Ut sollicitudin quam vel purus tempus, <br />vel eleifend felis varius.</p>

                        <Link href="/shop">
                            <button className="mt-4 font-poppins bg-lime-600 hover:bg-lime-500 text-white px-5 py-3 rounded-md">
                                <FaArrowRightLong className="inline-block text-lg mb-[2px]" /> Shop Now</button>
                        </Link>
                        <Image src="/img2.png" width={240} height={240} alt="banner" className="mx-auto" />
                    </div>
                    <div className="p-8 mx-auto lg:mx-0 w-[370px] h-[360px] bg-white rounded-md shadow-md">
                        <h1 className="text-2xl font-bold">Fresh Vegetables</h1>
                        <p className="text-gray-500 my-2 font-poppins">Aliquam porta justo nibh, id laoreet <br />sapien sodales vitae justo.</p>

                        <Link href="/shop">
                            <button className="mt-4 font-poppins bg-lime-600 hover:bg-lime-500 text-white px-5 py-3 rounded-md">
                                <FaArrowRightLong className="inline-block text-lg mb-[2px]" /> Shop Now</button>
                        </Link>
                        <Image src="/img1.png" width={260} height={260} alt="banner" className="mx-auto" />
                    </div>
                    <div className="p-8 mx-auto lg:mx-0 w-[370px] h-[360px] bg-white rounded-md shadow-md">
                        <h1 className="text-2xl font-bold">Organic Legume</h1>
                        <p className="text-gray-500 my-2 font-poppins">Phasellus sed urna mattis, viverra <br />libero sed, aliquam est.</p>

                        <Link href="/shop">
                            <button className="mt-4 font-poppins bg-lime-600 hover:bg-lime-500 text-white px-5 py-3 rounded-md">
                                <FaArrowRightLong className="inline-block text-lg mb-[2px]" /> Shop Now</button>
                        </Link>
                        <Image src="/img3.png" width={190} height={190} alt="banner" className="mx-auto" />
                    </div>
                </div>
            </div>

            <div className="bg-black">
                <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center lg:justify-between md:pt-8 pt-5 lg:pt-0 h-[168px]">
                    <h1 className="text-2xl text-center md:text-4xl font-extrabold text-white ">Get 25% Off On Your First Purchase!</h1>
                    <Link href="/shop">
                        <button className="font-poppins mt-3 lg:mt-0 bg-lime-600 hover:bg-lime-500 text-white px-5 py-3 rounded-md">
                            <FaShoppingCart className="inline-block text-lg mb-[2px]" /> Shop Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceItems;
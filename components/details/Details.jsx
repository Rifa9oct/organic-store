import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsZoomIn } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import Quantity from "../action-button/Quantity";
import AddToCart from "../action-button/AddToCart";
import Checkout from "../action-button/Checkout";
import Share from "../action-button/Share";
import Related from "./Related";
import Tabs from "./tabs/Tabs";
import Description from "./tabs/Description";
import Reviews from "./tabs/ReviewForm";

const Details = async () => {

    return (
        <>
            <div className="grid grid-cols-2 py-16">
                <div className="relative w-[600px] h-[600px] cursor-zoom-in overflow-hidden">
                    <Image src="/grocery1.png" width={600} height={600} alt="product" className="transform transition-transform hover:scale-125" />

                    <div className="absolute bg-white rounded-full w-[36px] h-[36px] pt-2 pl-2 top-4 right-4">
                        <BsZoomIn className="text-lg" />
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-2">Handpicked Red Chillies</h2>
                    <div className="font-poppins flex items-center mb-4">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><MdOutlineStarPurple500 /></span>
                            <span><MdOutlineStarPurple500 /></span>
                            <span><MdOutlineStarPurple500 /></span>
                            <span><MdOutlineStarPurple500 /></span>
                            <span><MdOutlineStarPurple500 /></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(190 Reviews)</div>
                    </div>
                    <div className="font-poppins space-y-2">
                        <p className="text-gray-800 font-semibold space-x-2">
                            <span>Availability: </span>
                            <span className="text-lime-500">In Stock</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">Brand: </span>
                            <span className="text-gray-600">UrbanLiving</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">Category: </span>
                            <span className="text-gray-600">Grocery</span>
                        </p>
                    </div>
                    <div className="font-poppins flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                        <p className="text-xl text-primary font-semibold">£19.00 </p>
                        <span className="text-gray-600">+ Free Shipping</span>
                        {/* <p className="text-base text-gray-400 line-through">${product?.discount}</p> */}
                    </div>

                    <p className="font-poppins mt-4 text-gray-600">Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.</p>

                    <div className="font-poppins mt-4">
                        <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
                        <Quantity />
                    </div>

                    <div className="font-poppins mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
                        <div>
                            <AddToCart />
                        </div>

                        <Checkout />
                    </div>

                    <div className="font-poppins flex items-center gap-3 mt-4">
                        <Link href="#"
                            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <FaFacebook />
                        </Link>
                        <Link href="#"
                            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <FaTwitter />
                        </Link>
                        <Link href="#"
                            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <FaInstagram />
                        </Link>

                        <Share />
                    </div>
                </div>
            </div>

            <div>
                <Tabs
                    config={[
                        { header: "Description", component: <Description /> },
                        { header: "Reviews (0)", component: <Reviews /> },
                    ]}
                />
            </div>

            <Related />
        </>
    );
};

export default Details;
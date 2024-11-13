import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import HeaderTitle from "./HeaderTitle";

const Reviews = ({dict}) => {
    return (
        <>
            <HeaderTitle title={dict.CustomersReviews} />
            
            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-6 justify-between mb-5">
                <div className="w-[376px] mx-auto lg:mx-0 rounded-lg shadow-lg lg:mt-[80px] p-[50px] border" >
                    <div className="flex gap-1 justify-center mb-3">
                        <FaStar className="text-lg text-[#ffbb1e]" />
                        <FaStar className="text-lg text-[#ffbb1e]" />
                        <FaStar className="text-lg text-[#ffbb1e]" />
                        <FaStar className="text-lg text-[#ffbb1e]" />
                        <FaStar className="text-lg text-[#ffbb1e]" />
                    </div>
                    <p className="font-poppins text-gray-500 text-center w-[268px]">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div className="flex items-center justify-center gap-4 mt-4">
                        <Image src="/person1.png" width={100} height={100} alt="person" className="w-[55px] h-[55px] rounded-full" />
                        <p className="text-gray-500 font-poppins">Mike Sendler</p>
                    </div>
                </div>

                <div className="w-[376px] mx-auto lg:mx-0 h-[422px] rounded-lg shadow-lg text-center text-white bg-[url('/offer.png')]">
                    <div className="flex flex-col justify-center bg-black bg-opacity-60 hover:bg-opacity-75 transition cursor-pointer h-[422px] rounded-lg">
                        <h1 className="text-4xl font-extrabold mb-3">{dict.ReviewOffer1} <br /> {dict.ReviewOffer2} <br /> {dict.ReviewOffer3}</h1>
                        <p className="font-poppins text-gray-300">{dict.ReviewTitle}</p>
                        <Link href="/shop">
                            <button className="font-poppins mt-4 bg-lime-600 hover:bg-lime-500 text-white px-5 py-3 rounded-md">
                                <FaArrowRightLong className="inline-block text-lg mb-[2px]" /> {dict.ShopNow}</button>
                        </Link>
                    </div>
                </div>

                <div className="w-[376px] mx-auto lg:mx-0 rounded-lg shadow-lg lg:mt-[80px] p-[50px] border" >
                    <div className="flex gap-1 justify-center mb-3">
                        <FaStar className="text-lg text-[#ffbb1e]" />
                        <FaStar className="text-lg text-[#ffbb1e]" />
                        <FaStar className="text-lg text-[#ffbb1e]" />
                        <FaStar className="text-lg text-[#ffbb1e]" />
                        <FaStar className="text-lg text-[#ffbb1e]" />
                    </div>
                    <p className="font-poppins text-gray-500 text-center w-[268px]">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div className="flex items-center justify-center gap-4 mt-4">
                        <Image src="/person1.png" width={100} height={100} alt="person" className="w-[55px] h-[55px] rounded-full" />
                        <p className="text-gray-500 font-poppins">Mike Sendler</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="animate-bounce mt-4 shadow-lg shadow-black transition bg-black hover:bg-lime-500 text-white px-[15px] py-3 rounded-full">
                    <FaArrowDownLong className="inline-block text-lg" />{dict.More}</button>
            </div>
        </>
    );
};

export default Reviews;
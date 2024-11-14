import Image from "next/image";
import Link from "next/link";
import { FaStar, FaUserCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import HeaderTitle from "./HeaderTitle";
import { getReviews } from "@/queries/product-queries";
import SeeMoreReviews from "./action-button/SeeMoreReviews";

const Reviews = async ({ dict, seeReview }) => {
    const reviews = await getReviews();
    const rating = [1, 2, 3, 4, 5];

    return (
        <>
            <HeaderTitle title={dict.CustomersReviews} />

            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-6 mb-5">
                <div className="w-[376px] h-[345px] mx-auto lg:mx-0 rounded-lg shadow-lg lg:mt-[78px] p-10 border" >
                    <div className="flex gap-1 justify-center mb-3">
                        {
                            rating.map(rate => (
                                <FaStar key={rate} className="text-lg text-[#ffbb1e]" />
                            ))
                        }
                    </div>
                    <p className="text-center text-xl font-bold mb-2">{reviews[0]?.title}</p>
                    <p className="h-[120px] text-pretty font-poppins text-gray-500 text-center w-[268px]">{reviews[0]?.message}</p>
                    <div className="flex items-center justify-center gap-4 mt-4">
                        {
                            reviews[0]?.image ? (
                                <Image src={reviews[0]?.image} width={100} height={100} alt="person" className="w-[55px] h-[55px] rounded-full" />
                            ) : (
                                <FaUserCircle className="text-[50px]" />
                            )
                        }

                        <p className="text-gray-500 font-poppins">{reviews[0]?.name}</p>
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

                <div className="w-[376px] h-[345px] mx-auto lg:mx-0 rounded-lg shadow-lg lg:mt-[78px] p-10 border" >
                    <div className="flex gap-1 justify-center mb-3">
                        {
                            rating.map(rate => (
                                <FaStar key={rate} className="text-lg text-[#ffbb1e]" />
                            ))
                        }
                    </div>
                    <p className="text-center text-xl font-bold mb-2">{reviews[1]?.title}</p>
                    <p className="h-[120px] text-pretty font-poppins text-gray-500 text-center w-[268px]">{reviews[1]?.message}</p>
                    <div className="flex items-center justify-center gap-4 mt-4">
                        {
                            reviews[1]?.image ? (
                                <Image src={reviews[1]?.image} width={100} height={100} alt="person" className="w-[55px] h-[55px] rounded-full" />
                            ) : (
                                <FaUserCircle className="text-[50px]" />
                            )
                        }

                        <p className="text-gray-500 font-poppins">{reviews[1]?.name}</p>
                    </div>
                </div>
            </div>

            {
                seeReview && (
                    <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mb-5">
                        {
                            reviews?.slice(2).map(review => (
                                <div key={review.id} className="w-[376px] h-[345px] mx-auto lg:mx-0 rounded-lg shadow-lg mt-5 p-10 border" >
                                    <div className="flex gap-1 justify-center mb-3">
                                        {
                                            rating.map(rate => (
                                                <FaStar key={rate} className="text-lg text-[#ffbb1e]" />
                                            ))
                                        }
                                    </div>
                                    <p className="text-center text-xl font-bold mb-2">{review.title}</p>
                                    <p className="h-[120px] text-pretty font-poppins text-gray-500 text-center w-[268px]">{review.message.slice(0, 150)}{`${review.message.length > 150 ? "..." : ""}`}</p>
                                    <div className="flex items-center justify-center gap-4 mt-4">
                                        {
                                            review.image ? (
                                                <Image src={review.image} width={100} height={100} alt="person" className="w-[55px] h-[55px] rounded-full" />
                                            ) : (
                                                <FaUserCircle className="text-[55px]" />
                                            )
                                        }

                                        <p className="text-gray-500 font-poppins">{review.name}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }

            <div className="flex justify-center">
                <SeeMoreReviews dict={dict} />
            </div>
        </>
    );
};

export default Reviews;
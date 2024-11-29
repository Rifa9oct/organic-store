import Image from "next/image";
import Link from "next/link";
import { FaStar, FaUserCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import HeaderTitle from "./HeaderTitle";
import { getReviews } from "@/queries/product-queries";
import SeeMoreReviews from "./action-button/SeeMoreReviews";
import DeleteReview from "./action-button/DeleteReview";
import { getUserByEmail } from "@/queries/user-queries";
import { auth } from "@/auth";

const Reviews = async ({ dict, seeReview }) => {
    const session = await auth();
    const reviews = await getReviews();
    const rating = [1, 2, 3, 4, 5];
    const user = await getUserByEmail(session?.user?.email);

    return (
        <>
            <HeaderTitle title={dict.CustomersReviews} />

            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10 mb-5">
                <div data-aos="flip-right" data-aos-duration="1500" className="relative w-[376px] h-[345px] mx-auto lg:mx-0 rounded-lg shadow-lg lg:mt-[78px] p-10 border" >
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
                                <Image src={reviews[0]?.image} width={100} height={100} alt="person" className="w-[50px] h-[50px] rounded-full border" />
                            ) : (
                                <FaUserCircle className="text-[50px]" />
                            )
                        }

                        <p className="text-gray-500 font-poppins">{reviews[0]?.name}</p>
                    </div>
                </div>

                <div data-aos="flip-right" data-aos-duration="1500" className="relative w-[376px] h-[422px] mx-auto lg:mx-0 rounded-lg shadow-lg text-center text-white bg-[url('/offer.png')]">
                    <div className="flex flex-col justify-center bg-black bg-opacity-60 hover:bg-opacity-75 transition cursor-pointer h-[422px] rounded-lg">
                        <h1 className="text-4xl font-extrabold mb-3">{dict.ReviewOffer1} <br /> {dict.ReviewOffer2} <br /> {dict.ReviewOffer3}</h1>
                        <p className="font-poppins text-gray-300">{dict.ReviewTitle}</p>
                        <Link href="/shop">
                            <button className="font-poppins mt-4 bg-lime-600 hover:bg-lime-500 text-white px-5 py-3 rounded-md">
                                <FaArrowRightLong className="inline-block text-lg mb-[2px]" /> {dict.ShopNow}</button>
                        </Link>
                    </div>
                </div>

                <div data-aos="flip-right" data-aos-duration="1500" className="relative w-[376px] h-[345px] mx-auto lg:mx-0 rounded-lg shadow-lg lg:mt-[78px] p-10 border" >
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
                                <Image src={reviews[1]?.image} width={100} height={100} alt="person" className="w-[50px] h-[50px] rounded-full border" />
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
                    <>
                        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-5 mt-10">
                            {
                                reviews?.slice(2).map(review => (
                                    <div key={review.id} className="relative w-[376px] h-[345px] mx-auto lg:mx-0 rounded-lg shadow-lg p-10 border" >
                                        <div className="flex gap-1 justify-center mb-3">
                                            {
                                                rating.map(rate => (
                                                    <FaStar key={rate} className="text-lg text-[#ffbb1e]" />
                                                ))
                                            }
                                        </div>
                                        <p className="text-center text-xl font-bold mb-2">{review.title}</p>
                                        <p className="h-[120px] text-pretty font-poppins text-gray-500 text-center w-[268px]">{review.message}</p>
                                        <div className="flex items-center justify-center gap-4 mt-4">
                                            {
                                                review.image ? (
                                                    <Image src={review.image} width={100} height={100} alt="person" className="w-[50px] h-[50px] rounded-full border" />
                                                ) : (
                                                    <FaUserCircle className="text-[50px]" />
                                                )
                                            }

                                            <p className="text-gray-500 font-poppins">{review.name}</p>
                                        </div>
                                        {
                                            (review.userId === user[0]?.id ) && <DeleteReview review={review} />
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </>

                )
            }

            <div className="flex justify-center">
                <SeeMoreReviews see={seeReview} dict={dict} />
            </div>
        </>
    );
};

export default Reviews;
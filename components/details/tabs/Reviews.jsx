import { MdOutlineStarPurple500 } from "react-icons/md";
import ReviewForm from "./ReviewForm";
import { auth } from "@/auth";
import { getReviews } from "@/queries/product-queries";
import Link from "next/link";
import { FaStar, FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import DeleteReview from "@/components/action-button/DeleteReview";
import { getUserByEmail } from "@/queries/user-queries";

const Reviews = async ({ product }) => {
    const session = await auth();
    const reviews = await getReviews();
    const isAddReview = reviews.find(review => (review.productId === product?.id) && (review.userId === session?.user?.userId));
    const rating = [1, 2, 3, 4, 5];
    const user = await getUserByEmail(session?.user?.email);

    console.log(isAddReview)

    return (
        <div className="mb-20 font-poppins">

            {
                isAddReview ? (
                    <div className="relative md:w-[376px] mb-[50px] rounded-lg shadow-lg px-5 py-10 border" >
                        <div className="flex gap-6 mt-5 items-center">
                            {
                                user[0]?.image ? (
                                    <div className="w-[50px] h-[50px] rounded-full border overflow-hidden">
                                        <Image src={user[0]?.image} width={50} height={50} alt="person"/>
                                    </div>
                                ) : (
                                    <FaUserCircle className="text-[50px]" />
                                )
                            }

                            <div className="w-[260px]">
                                <div className="flex gap-1 mb-3">
                                    {
                                        rating.map(rate => (
                                            <FaStar key={rate} className="text-sm text-[#ffbb1e]" />
                                        ))
                                    }
                                </div>

                                <p className="text-pretty font-poppins text-gray-500">{isAddReview.message}</p>
                            </div>
                        </div>

                        {
                            (isAddReview?.userId === user[0]?.id) && <DeleteReview review={isAddReview} />
                        }
                    </div>
                ) : (
                    <h1 className="text-xl">Please, Give your review!</h1>
                )
            }


            <div className="lg:w-[1170px] p-[26px] border-2 mt-5">
                <h1 className="text-xl text-gray-600">Review of “{product?.title}”</h1>
                <p className="text-gray-500 mt-2">Your email address will not be published. Required fields are marked *</p>

                <div className="flex gap-1 items-center">
                    <h3 className="text-lg my-2 text-gray-700">Your rating *</h3>
                    <div className="flex gap-1 text-yellow-400">
                        <span><MdOutlineStarPurple500 /></span>
                        <span><MdOutlineStarPurple500 /></span>
                        <span><MdOutlineStarPurple500 /></span>
                        <span><MdOutlineStarPurple500 /></span>
                        <span><MdOutlineStarPurple500 /></span>
                    </div>
                </div>

                <h3 className="text-lg my-2 text-gray-700">Your review *</h3>
                <ReviewForm
                    user={session?.user}
                    product={product}
                    isAddReview={isAddReview}
                />
            </div>
        </div>
    );
};

export default Reviews;
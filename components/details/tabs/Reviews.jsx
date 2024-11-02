import { MdOutlineStarPurple500 } from "react-icons/md";
import ReviewForm from "./ReviewForm";
import { auth } from "@/auth";
import { getReviews } from "@/queries/product-queries";

const Reviews = async ({ productId }) => {
    const session = await auth();
    const userId = session?.user?.userId;
    const reviews = await getReviews();

    return (
        <div className="mb-20 font-poppins">
            <h1 className="text-xl">Please, Give your review!</h1>
            <div className="lg:w-[1170px] p-[26px] border-2 mt-5">
                <h1 className="text-xl text-gray-600">Review of “Assorted Coffee”</h1>
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
                    productId={productId}
                    userId={userId}
                    reviews={reviews}
                />
            </div>
        </div>
    );
};

export default Reviews;
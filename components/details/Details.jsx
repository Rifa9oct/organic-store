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
import Reviews from "./tabs/Reviews";
import { auth } from "@/auth";
import { getProductById, getReviewsById } from "@/queries/product-queries";

const Details = async ({ id }) => {
    const session = await auth();
    const product = await getProductById(id);
    const reviews = await getReviewsById(id);

    return (
        <div className="lg:m-0 mx-8">
            <div className="grid lg:grid-cols-2 grid-cols-1 py-16">
                <div className="relative mx-auto md:w-[600px] md:h-[600px] cursor-zoom-in overflow-hidden">
                    <Image src={product?.thumbnail} width={600} height={600} alt="product" className="transform transition-transform hover:scale-125" />

                    <div className="absolute bg-white rounded-full w-[36px] h-[36px] pt-2 pl-2 top-4 right-4">
                        <BsZoomIn className="text-lg" />
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold lg:mt-0 mt-8 mb-2">{product?.title}</h2>
                    <div className="font-poppins flex items-center mb-4">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><MdOutlineStarPurple500 /></span>
                            <span><MdOutlineStarPurple500 /></span>
                            <span><MdOutlineStarPurple500 /></span>
                            <span><MdOutlineStarPurple500 /></span>
                            <span><MdOutlineStarPurple500 /></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">({reviews?.length} Reviews)</div>
                    </div>
                    <div className="font-poppins space-y-2">
                        <p className="text-gray-800 font-semibold space-x-2">
                            <span>Availability: </span>
                            <span className="text-lime-500">{product?.availability}</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">Brand: </span>
                            <span className="text-gray-600">{product?.brand}</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">Category: </span>
                            <span className="text-gray-600">{product?.category}</span>
                        </p>
                    </div>
                    <div className="font-poppins flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                        {
                            product?.discount > 0 && <span className="text-lg text-gray-400 line-through font-semibold">£{product?.discount} </span>
                        }
                        <p className="text-xl text-primary font-semibold">£{product?.price} </p>
                        <span className="text-gray-600">+ Free Shipping</span>
                    </div>

                    <p className="font-poppins mt-4 text-gray-600">{product?.description.slice(0, 180)}...</p>

                    <div className="font-poppins mt-4">
                        <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
                        <Quantity totalQuantity={product?.quantity} />
                    </div>

                    <div className="font-poppins mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
                        <div>
                            <AddToCart
                                userId={session?.user?.userId}
                                product={product}
                            />
                        </div>

                        <Checkout userId={session?.user?.userId} product={product} />
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

                        <Share productId={id} />
                    </div>
                </div>
            </div>

            <div>
                <Tabs
                    config={[
                        { header: "Description", component: <Description des={product?.description} /> },
                        { header: `Reviews (${reviews?.length})`, component: <Reviews product={product} /> },
                    ]}
                />
            </div>

            <Related category={product?.category} />
        </div>
    );
};

export default Details;
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="bg-[#F8F6F3]">
            <div className="max-w-[1220px] mx-auto flex md:flex-row flex-col-reverse text-center md:text-start justify-between items-center py-10 md:py-16 lg:py-[128px]">
                <Image src="/banner.png" width={607} height={520} alt="banner" className="mx-auto md:mx-0 w-[350px] lg:w-[607px]" />
                <div>
                    <Image src="/little-leaf.png" width={75} height={33} alt="banner" className="md:mx-0 mx-auto" />
                    <h2 className="text-xl lg:text-2xl font-bold my-3">Best Quality Products</h2>
                    <h1 className="text-4xl lg:text-6xl font-bold">Join The Organic</h1>
                    <h1 className="text-4xl lg:text-6xl font-bold mt-3">Movement!</h1>
                    <p className="lg:w-[512px] text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <Link href="/shop">
                        <button className="mt-4 bg-lime-600 hover:bg-lime-500 text-white px-5 py-3 rounded-md">
                            <FaShoppingCart className="inline-block text-lg mb-[2px]" /> Shop Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
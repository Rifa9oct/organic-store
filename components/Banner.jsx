import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Banner = ({dict}) => {
    return (
        <div className="bg-[#F8F6F3]">
            <div className="max-w-[1320px] mx-auto flex md:flex-row flex-col-reverse text-center md:text-start justify-center md:gap-6 lg:gap-20 items-center py-10 md:py-16 lg:py-[128px]">
                <Image data-aos="fade-right"  data-aos-duration="1500" src="/banner.png" width={607} height={520} alt="banner" className="mx-auto md:mx-0 w-[350px] lg:w-[607px]" />
                <div data-aos="fade-left"  data-aos-duration="1500">
                    <Image src="/little-leaf.png" width={75} height={33} alt="banner" className="md:mx-0 mx-auto" />
                    <h2 className="text-xl lg:text-2xl font-bold my-3">{dict.BannarSubTitle}</h2>
                    <h1 className="text-4xl lg:text-6xl font-bold">{dict.BannarTitle1}</h1>
                    <h1 className="text-4xl lg:text-6xl font-bold mt-3">{dict.BannarTitle2}!</h1>
                    <p className="font-poppins px-5 md:pr-5 lg:px-0 lg:w-[512px] text-gray-600 mt-4">{dict.BannarDes}</p>
                    <Link href="/shop">
                        <button className="font-poppins mt-4 bg-lime-600 hover:bg-lime-500 text-white px-5 py-3 rounded-md md:mb-0 mb-10">
                            <FaShoppingCart className="inline-block text-lg mb-[2px]" /> {dict.ShopNow}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
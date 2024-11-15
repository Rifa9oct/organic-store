import Image from "next/image";
import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";

const Footer = async ({ lang }) => {
    const dict = await getDictionary(lang);

    return (
        <div className="pt-6 lg:pt-[75px] bg-black">
            <div className="max-w-[1200px] mx-auto lg:p-0 p-8 flex flex-col lg:flex-row text-center lg:text-start justify-between text-[#ffffffa8]">
                <div>
                    <Link href="/">
                        <Image src="/footerLogo.png" width={150} height={70} alt="Logo" className="mx-auto lg:mx-0" />
                    </Link>
                    <p className="lg:mb-0 mb-8 mt-8 lg:w-[350px] md:text-lg font-bold">{dict.FooterDes1}</p>
                </div>
                <div className="flex flex-row lg:flex-col justify-center gap-10 lg:gap-0 md:gap-16 mb-8 lg:mb-0">
                    <div className="list-none">
                        <h1 className="text-2xl font-bold text-white mb-5">{dict.QuickLinks}</h1>
                        <div className="font-poppins">
                            <li><Link href="/"></Link>{dict.Home}</li>
                            <li><Link href="/about"></Link>{dict.About}</li>
                            <li><Link href="/contact"></Link>{dict.Contact}</li>
                            <li><Link href="/cart"></Link>{dict.Cart}</li>
                            <li><Link href="/account"></Link>{dict.MyAccount}</li>
                            <li><Link href="/shop"></Link>{dict.Shop}</li>
                        </div>

                    </div>
                    <div className="list-none lg:mt-16">
                        <h1 className="text-2xl font-bold text-white mb-5">{dict.SiteLinks}</h1>
                        <div className="font-poppins">
                            <li><Link href="#"></Link>{dict.PrivacyPolicy}</li>
                            <li><Link href="#"></Link>{dict.ShippingDetails}</li>
                            <li><Link href="#"></Link>{dict.OffersCoupons}</li>
                            <li><Link href="#"></Link>{dict.TermsConditions}</li>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mb-8 lg:mb-16">
                        <h1 className="text-2xl font-bold text-white mb-5">{dict.Download}</h1>
                        <p className="font-poppins lg:w-[300px]">{dict.FooterDes2}</p>
                    </div>
                    <div className="list-none">
                        <h1 className="text-2xl font-bold text-white mb-5">{dict.QuickLinks}</h1>
                        <div className="font-poppins">
                            <li><Link href="#"></Link>{dict.KnowMore}</li>
                            <li><Link href="#"></Link>{dict.VisitStore}</li>
                            <li><Link href="#"></Link>{dict.LetConnect}</li>
                            <li><Link href="#"></Link>{dict.LocateStores}</li>
                        </div>

                    </div>
                    <div className="flex justify-center gap-6 mt-10">
                        <Image src="/playStore.png" width={125} height={37} alt="playStore" />
                        <Image src="/appStore.png" width={125} height={37} alt="appStore" />
                    </div>
                </div>
            </div>

            <div className="text-[#ffffffa8] mt-6 lg:mt-[75px] py-[30px] border-t border-gray-500">
                <div className="max-w-[1200px] mx-auto px-8 lg:p-0 gap-4 md:gap-0 flex md:flex-row flex-col justify-center md:justify-between items-center">
                    <p className="font-poppins">{dict.Copyright}</p>
                    <div className="flex list-none gap-6">
                        <li>
                            <Link href="#"><FaSquareFacebook className="hover:text-white text-gray-400 text-xl" /></Link>
                        </li>
                        <li>
                            <Link href="#"><FaTwitter className="hover:text-white text-gray-400 text-xl" /></Link>
                        </li>
                        <li>
                            <Link href="#"><FaInstagram className="hover:text-white text-gray-400 text-xl" /></Link>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
import Image from "next/image";
import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";

const Footer = async ({ lang }) => {
    const dict = await getDictionary(lang);

    return (
        <div className=" bg-black">
            <div data-aos="zoom-in" data-aos-duration="1300">
                <div className="max-w-[1200px] py-8 lg:py-12 mx-auto flex flex-col gap-8 lg:gap-[100px] lg:flex-row text-center lg:text-start text-[#ffffffa8]">
                    <div>
                        <Link href="/">
                            <Image src="/footerLogo.png" width={150} height={70} alt="Logo" className="mx-auto lg:mx-0" />
                        </Link>
                        <p className="mt-8 px-12 lg:px-0 lg:w-[500px] md:text-lg font-bold">{dict.FooterDes1}</p>
                    </div>

                    <div className="flex flex-col-reverse gap-8 lg:gap-[142px] lg:flex-row">
                        <div className="list-none hidden lg:block">
                            <h1 className="text-2xl font-bold text-white mb-3">{dict.QuickLinks}</h1>
                            <div className="font-poppins">
                                <li><Link href="/account">{dict.MyAccount}</Link></li>
                                <li><Link href="/">{dict.Home}</Link></li>
                                <li><Link href="/about">{dict.About}</Link></li>
                                <li><Link href="/contact">{dict.Contact}</Link></li>
                                <li><Link href="/cart">{dict.Cart}</Link></li>
                                <li><Link href="/shop">{dict.Shop}</Link></li>
                            </div>
                        </div>

                        <div>
                            <div className="mb-8 lg:mb-16">
                                <h1 className="text-2xl font-bold text-white mb-3">{dict.Download}</h1>
                                <p className="font-poppins px-12 lg:px-0 lg:w-[300px]">{dict.FooterDes2}</p>
                            </div>

                            <div className="flex justify-center lg:justify-start gap-6 mt-10">
                                <Image src="/playStore.png" width={125} height={37} alt="playStore" />
                                <Image src="/appStore.png" width={125} height={37} alt="appStore" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-[#ffffffa8] py-[30px] border-t border-gray-500">
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
                                <Link href="https://www.instagram.com/kohinur_akther.dev" target="_blank"><FaInstagram className="hover:text-white text-gray-400 text-xl" /></Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/in/most-kohinur-akther" target="_blank"><FaLinkedin className="hover:text-white text-gray-400 text-xl" /></Link>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
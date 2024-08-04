import Image from "next/image";
import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="pt-[75px] bg-black">
            <div className="max-w-[1200px] mx-auto lg:p-0 p-8 flex flex-col lg:flex-row text-center lg:text-start justify-between text-[#ffffffa8]">
                <div>
                    <Link href="/">
                        <Image src="/footerLogo.png" width={150} height={70} alt="Logo" className="mx-auto lg:mx-0" />
                    </Link>
                    <p className="lg:mb-0 mb-8 mt-8 lg:w-[350px] text-lg font-bold">Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse quis faucibus urna. Suspendisse pellentesque.</p>
                </div>
                <div className="flex flex-row lg:flex-col justify-center gap-10 lg:gap-0 md:gap-16 mb-8 lg:mb-0">
                    <div className="list-none">
                        <h1 className="text-2xl font-bold text-white mb-5">Quick Links</h1>
                        <li><Link href="/"></Link>Home</li>
                        <li><Link href="/about"></Link>About</li>
                        <li><Link href="/contact"></Link>Contact</li>
                        <li><Link href="/cart"></Link>Cart</li>
                        <li><Link href="/account"></Link>My account</li>
                        <li><Link href="/shop"></Link>Shop</li>
                    </div>
                    <div className="list-none lg:mt-16">
                        <h1 className="text-2xl font-bold text-white mb-5">Site Links</h1>
                        <li><Link href="#"></Link>Privacy Policy</li>
                        <li><Link href="#"></Link>Shipping Details</li>
                        <li><Link href="#"></Link>Offers Coupons</li>
                        <li><Link href="#"></Link>Terms & Conditions</li>
                    </div>
                </div>
                <div>
                    <div className="mb-16">
                        <h1 className="text-2xl font-bold text-white mb-5">Download Our Mobile App</h1>
                        <p className="lg:w-[300px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam gravida sollicitudin. Praesent porta enim mi, non tincidunt libero interdum sit amet.</p>
                    </div>
                    <div className="list-none">
                        <h1 className="text-2xl font-bold text-white mb-5">Quick Links</h1>
                        <li><Link href="#"></Link>Know More About Us</li>
                        <li><Link href="#"></Link>Visit Store</li>
                        <li><Link href="#"></Link>Let’s Connect</li>
                        <li><Link href="#"></Link>Locate Stores</li>
                    </div>
                    <div className="flex justify-center gap-6 mt-10">
                        <Image src="/playStore.png" width={125} height={37} alt="playStore" />
                        <Image src="/appStore.png" width={125} height={37} alt="appStore" />
                    </div>
                </div>
            </div>

            <div className="text-[#ffffffa8] mt-[75px] py-[30px] border-t border-gray-500">
                <div className="max-w-[1200px] mx-auto px-8 lg:p-0 gap-4 md:gap-0 flex md:flex-row flex-col justify-center md:justify-between items-center">
                    <p>Copyright © 2024 | Organic Store</p>
                    <div className="flex list-none gap-6">
                        <li>
                            <Link href="#"><FaSquareFacebook className="text-white text-xl" /></Link>
                        </li>
                        <li>
                            <Link href="#"><FaTwitter className="text-white text-xl" /></Link>
                        </li>
                        <li>
                            <Link href="#"><FaInstagram className="text-white text-xl" /></Link>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
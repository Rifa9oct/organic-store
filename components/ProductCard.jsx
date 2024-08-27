import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";

const ProductCard = () => {
    return (
        <div className="mx-auto text-center w-[285px] group">
            <div className="relative">
                <Image src="/grocery1.png" width={285} height={285} alt="banner" className="mb-3" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    <Link href="/details" className="text-white text-lg w-9 h-9 rounded-full bg-[#ffbb1e] flex items-center justify-center hover:bg-lime-500 transition">
                        <FaMagnifyingGlass />
                    </Link>

                    <Link href="" className="text-white text-lg w-9 h-9 rounded-full bg-[#ffbb1e] flex items-center justify-center hover:bg-lime-500 transition">
                        <TiShoppingCart className='text-2xl' />
                    </Link>
                </div>
            </div>

            <Link href="">
                <p className="font-poppins text-sm text-gray-500 mb-1">Groceries</p>
            </Link>
            <Link href="">
                <h2 className="font-bold mb-1">Assorted Coffee</h2>
            </Link>

            <div className="flex gap-1 justify-center">
                <FaStar className="text-sm text-[#ffbb1e]" />
                <FaStar className="text-sm text-[#ffbb1e]" />
                <FaStar className="text-sm text-[#ffbb1e]" />
                <FaStar className="text-sm text-[#ffbb1e]" />
                <FaStar className="text-sm text-[#ffbb1e]" />
            </div>
            <p className="text-sn font-bold">£35.00</p>
        </div>
    );
};

export default ProductCard;
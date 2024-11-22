import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";

const ProductCard = ({ product }) => {

    return (
        <div data-aos="zoom-in"  data-aos-duration="1000" className="mx-auto text-center lg:w-[285px] group">
            <div className="relative">
                <Image src={product.image} width={285} height={285} alt="banner" className="mb-3" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    <Link href={`/details/${product.id}`} className="text-white text-lg w-9 h-9 rounded-full bg-[#ffbb1e] flex items-center justify-center hover:bg-lime-500 transition">
                        <FaMagnifyingGlass />
                    </Link>

                    <Link href="/cart" className="text-white text-lg w-9 h-9 rounded-full bg-[#ffbb1e] flex items-center justify-center hover:bg-lime-500 transition">
                        <TiShoppingCart className='text-2xl' />
                    </Link>
                </div>

                {
                    product.discount !== 0 && (
                        <div className="font-poppins absolute -top-3 -right-3 text-white bg-lime-500 rounded-full pt-3 h-12 w-12">Sale</div>
                    )
                }
            </div>

            <p className="font-poppins text-sm text-gray-500 mb-1">{product.category}</p>
            <Link href={`/details/${product.id}`}>
                <h2 className="font-bold mb-1">{product.title}</h2>
            </Link>

            <div className="flex gap-1 my-1 justify-center">
                <FaStar className="text-sm text-[#ffbb1e]" />
                <FaStar className="text-sm text-[#ffbb1e]" />
                <FaStar className="text-sm text-[#ffbb1e]" />
                <FaStar className="text-sm text-[#ffbb1e]" />
                <FaStar className="text-sm text-[#ffbb1e]" />
            </div>
            <div className="flex justify-center font-bold">
                <p className=" line-through text-gray-400">{`${product.
                    discount !== 0 ? "£" : ""}`}{`${product.
                        discount !== 0 ? product.discount : ""}`}</p>
                <p className={`${product.
                    discount !== 0 ? "ml-2" : ""}`}>£{product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
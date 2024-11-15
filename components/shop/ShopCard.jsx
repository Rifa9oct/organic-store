import Image from "next/image";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";


const ShpoCard = ({ product }) => {
    return (
        <div className="mx-auto w-[285px] group">
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
                        <div className="font-poppins absolute -top-3 -right-3 text-white bg-lime-500 rounded-full pt-3 pl-2 h-12 w-12">Sale</div>
                    )
                }
            </div>

            <Link href={`/details/${product.id}`}>
                <h2 className="mb-1 text-lime-500">{product.title}</h2>
            </Link>
            <div className="flex">
                <p className=" line-through text-gray-400">{`${product.
                    discount !== 0 ? "£" : ""}`}{`${product.
                        discount !== 0 ? product.discount : ""}`}</p>
                <p className={`${product.
                    discount !== 0 ? "ml-2" : ""}`}>£{product.price}</p>
            </div>
        </div>
    );
};

export default ShpoCard;
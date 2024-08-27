import Image from "next/image";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";


const ShpoCard = () => {
    return (
        <div className="flex flex-col gap-10 mt-16">
            <div className="mx-auto w-[285px] group">
                <div className="relative">
                    <Image src="/grocery1.png" width={285} height={285} alt="banner" className="mb-3" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <Link href="" className="text-white text-lg w-9 h-9 rounded-full bg-[#ffbb1e] flex items-center justify-center hover:bg-lime-500 transition">
                            <FaMagnifyingGlass />
                        </Link>

                        <Link href="" className="text-white text-lg w-9 h-9 rounded-full bg-[#ffbb1e] flex items-center justify-center hover:bg-lime-500 transition">
                            <TiShoppingCart className='text-2xl' />
                        </Link>
                    </div>

                    <div className="font-poppins absolute -top-3 -right-3 text-white bg-lime-500 rounded-full pt-3 pl-2 h-12 w-12">Sale</div>
                </div>

                <Link href="">
                    <h2 className="mb-1 text-lime-500">Assorted Coffee</h2>
                </Link>
                <div className="flex gap-2">
                    <p className="text-sn line-through">£35.00</p>
                    <p className="text-sn">£25.00</p>
                </div>
            </div>

            <div className="mx-auto w-[285px] group">
                <div className="relative">
                    <Image src="/grocery1.png" width={285} height={285} alt="banner" className="mb-3" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <Link href="" className="text-white text-lg w-9 h-9 rounded-full bg-[#ffbb1e] flex items-center justify-center hover:bg-lime-500 transition">
                            <FaMagnifyingGlass />
                        </Link>

                        <Link href="" className="text-white text-lg w-9 h-9 rounded-full bg-[#ffbb1e] flex items-center justify-center hover:bg-lime-500 transition">
                            <TiShoppingCart className='text-2xl' />
                        </Link>
                    </div>
                </div>

                <Link href="">
                    <h2 className="mb-1 text-lime-500">Assorted Coffee</h2>
                </Link>
                <div className="flex gap-2">
                    <p className="text-sn line-through">£35.00</p>
                    <p className="text-sn">£25.00</p>
                </div>
            </div>
        </div>
    );
};

export default ShpoCard;
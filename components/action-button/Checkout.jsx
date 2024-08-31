import Link from "next/link";
import { BsCartCheck } from "react-icons/bs";

const Checkout = () => {

    return (
        <div>
            <Link href="/checkout">
                <button
                    className="hover:bg-lime-600 border border-[#8BC34A] text-[#8BC34A] hover:text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2  transition">
                    <BsCartCheck className="font-bold" />Checkout
                </button>
            </Link>
        </div>
    );
};

export default Checkout;

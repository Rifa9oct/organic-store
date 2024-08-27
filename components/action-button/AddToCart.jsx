import { HiOutlineShoppingBag } from "react-icons/hi";

const AddToCart = () => {

    return (
        <div>
            <button
                className="bg-lime-600 hover:bg-lime-500 text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 transition">
                <HiOutlineShoppingBag />Addtocart
            </button>
        </div>
    );
};

export default AddToCart;

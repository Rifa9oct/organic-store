import { FaAngleRight } from "react-icons/fa6";
import Category from "./filter/Category";
import Price from "./filter/Price";
import ShopCard from "./ShopCard";
import { getProducts } from "@/queries/product-queries";

const LeftSidebar = async () => {
    const products = await getProducts();
    const trendingProducts = products.filter(product => product.arivalStatus === "trending");

    return (
        <div className="lg:w-[305px] lg:mr-[60px] lg:pt-[64px] p-8 lg:p-0">
            <div className="font-poppins flex gap-2 items-center">
                <input className="border w-full p-3 rounded-md focus:border-lime-500 outline-none"
                    type="text" placeholder="search products..." />

                <div className="bg-lime-600 text-lg rounded-md text-center text-white w-[35px] h-[47px] pl-2 pt-4"><FaAngleRight /></div>
            </div>

            <Category />
            <Price />

            <div className="hidden lg:flex flex-col gap-10 mt-16">
                {
                    trendingProducts.slice(0, 3).map((product, index) => <ShopCard key={index} product={product} />)
                }
            </div>
        </div>
    );
};

export default LeftSidebar;
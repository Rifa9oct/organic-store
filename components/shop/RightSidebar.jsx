import { getProducts } from "@/queries/product-queries";
import ProductCard from "../ProductCard";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const RightSidebar = async ({ title }) => {
    // lg:h-[1185px]
    
    const products = await getProducts();
    return (
        <div className="flex flex-col p-5 lg:pl-[60px] mt-8 lg:mt-[65px] pb-8 border-l-2">
            <h3 className="font-poppins text-gray-500 text-sm md:mb-3">Home / {title}</h3>
            <h1 className="mb-[52px] lg:text-[52px] text-4xl font-bold text-lime-500">{title}</h1>
            {
                title !== "Shop" && (
                    <p className="font-poppins text-gray-500 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim, velit et luctus interdum, est quam scelerisque tellus, eget luctus mi diam vitae erat. Praesent porttitor lacus vitae dictum posuere. Suspendisse elementum metus ac dolor tincidunt, eu imperdiet nisi dictum.</p>
                )
            }

            <div className="font-poppins flex justify-between items-center text-gray-500">
                <h3>Showing 1–9 of 12 results</h3>
                <select name="" id="" className="font-poppins p-2 outline-lime-500 cursor-pointer">
                    <option value="Default Sorting" selected="selected">Default sorting</option>
                    <option value="Sort by popularity">Sort by popularity</option>
                    <option value="Sort by latest">Sort by latest</option>
                    <option value="Sort by low to high">Sort by low to high</option>
                    <option value="Sort by high to low">Sort by high to low</option>
                </select>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 lg:gap-8 grow-0 lg:grow mt-[32px]">
                {
                    products.map((product, index) => <ProductCard key={index} product={product} />)
                }
            </div>

            <div className="flex items-center mt-[60px]">
                <button className="border w-[40px] h-[40px] hover:bg-lime-500 pl-3 text-lime-500 hover:text-white border-lime-500 mr-2"><FaArrowLeftLong /></button>

                <button className="font-poppins border w-[40px] h-[40px] text-lg hover:bg-lime-500 text-lime-500 hover:text-white border-lime-500 mr-2">15</button>

                <button className="border w-[40px] h-[40px] hover:bg-lime-500 pl-3 text-lime-500 hover:text-white border-lime-500"><FaArrowRightLong /></button>
            </div>
        </div>
    );
};

export default RightSidebar;
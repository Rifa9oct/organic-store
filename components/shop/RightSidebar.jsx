import { getPerPageProducts } from "@/queries/product-queries";
import ProductCard from "../ProductCard";
import Pagination from "./Pagination";

const RightSidebar = async ({ title, pageNo }) => {
    const { products, totalProducts } = await getPerPageProducts(pageNo);

    const start = (pageNo-1) * 9 + 1;
    const end = Math.min((pageNo-1) * 9 + 9, totalProducts);

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
                <h3>Showing {`${start}-${end} of ${totalProducts} `}results</h3>
                <select className="font-poppins p-2 outline-lime-500 cursor-pointer">
                    <option value="Default Sorting" defaultValue="Default Sorting">Default sorting</option>
                    <option value="Sort by popularity">Sort by popularity</option>
                    <option value="Sort by latest">Sort by latest</option>
                    <option value="Sort by low to high">Sort by low to high</option>
                    <option value="Sort by high to low">Sort by high to low</option>
                </select>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 lg:gap-8 mt-[32px]">
                {
                    products.map((product, index) => <ProductCard key={index} product={product} />)
                }
            </div>

            <Pagination totalProducts={totalProducts} />
        </div>
    );
};

export default RightSidebar;
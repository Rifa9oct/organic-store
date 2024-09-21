import Category from "./filter/Category";
import Price from "./filter/Price";
import ShopCard from "./ShopCard";
import { getProducts } from "@/queries/product-queries";
import Search from "./Search";

const LeftSidebar = async () => {
    const products = await getProducts();
    const trendingProducts = products.filter(product => product.arivalStatus === "trending");

    return (
        <div className="lg:w-[305px] lg:mr-[60px] lg:pt-[64px] p-8 lg:p-0">
            <Search />
            <Price />
            <Category />

            <div className="hidden lg:flex flex-col gap-10 mt-16">
                {
                    trendingProducts.slice(0, 3).map((product, index) => <ShopCard key={index} product={product} />)
                }
            </div>
        </div>
    );
};

export default LeftSidebar;
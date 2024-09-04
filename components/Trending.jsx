import { getProducts } from "@/queries/product-queries";
import HeaderTitle from "./HeaderTitle";
import ProductCard from "./ProductCard";

const Trending = async () => {
    const products = await getProducts();
    const trendingProducts = products.filter(product => product.arivalStatus === "trending");
    return (
        <div>
            <HeaderTitle title="Trending Products" />
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:justify-between mb-[120px]">
                {
                    trendingProducts.slice(0,4).map((product, index) => <ProductCard key={index} product={product} />)
                }
            </div>
        </div>
    );
};

export default Trending;
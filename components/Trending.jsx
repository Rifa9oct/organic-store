import HeaderTitle from "./HeaderTitle";
import ProductCard from "./ProductCard";

const Trending = () => {
    const products = [1, 2, 3, 4];
    return (
        <div>
            <HeaderTitle title="Trending Products" />
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:justify-between mb-[120px] lg:mb-0">
                {
                    products.map((product, index) => <ProductCard key={index} product={product} />)
                }
            </div>
        </div>
    );
};

export default Trending;
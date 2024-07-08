import HeaderTitle from "./HeaderTitle";
import ProductCard from "./ProductCard";

const Trending = () => {
    const products = [1, 2, 3, 4];
    return (
        <div>
            <HeaderTitle title="Trending Products" />
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:mx-[350px] gap-6 lg:gap-0 lg:justify-between">
                {
                    products.map((product, index) => <ProductCard key={index} product={product} />)
                }
            </div>
        </div>
    );
};

export default Trending;
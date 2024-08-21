import HeaderTitle from "./HeaderTitle";
import ProductCard from "./ProductCard";

const BestSelling = () => {
    const products = [1, 2, 3, 4];
    return (
        <div>
            <HeaderTitle title="Best Selling Products" />
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-[120px]">
                {
                    products.map((product, index) => <ProductCard key={index} product={product} />)
                }
            </div>
        </div>
    );
};

export default BestSelling;
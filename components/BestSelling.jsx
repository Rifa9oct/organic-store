import { getProducts } from "@/queries/product-queries";
import HeaderTitle from "./HeaderTitle";
import ProductCard from "./ProductCard";

const BestSelling = async ({dict}) => {
    const products = await getProducts();
    const bestSellingProducts = products.filter(product => product.arivalStatus === "best selling");

    return (
        <div>
            <HeaderTitle title={dict.BestSelling} />
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-[120px]">
                {
                    bestSellingProducts.slice(0,4).map((product, index) => <ProductCard key={index} product={product} />)
                }
            </div>
        </div>
    );
};

export default BestSelling;
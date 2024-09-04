import { getProducts } from "@/queries/product-queries";
import ProductCard from "../ProductCard";

const Related = async ({category}) => {
    const products = await getProducts();
    const filteredProducts = products?.filter(product => product?.category?.toLowerCase().includes(category.toLowerCase()));

    return (
        <div className="pb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-10">Related products</h2>

            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-[120px]">
                {
                    filteredProducts.slice(0,4).map((product, index) => <ProductCard key={index} product={product} />)
                }
            </div>
        </div>
    );
};

export default Related;
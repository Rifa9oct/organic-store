import ProductCard from "../ProductCard";

const Related = async () => {

    return (
        <div className="pb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-10">Related products</h2>

            <ProductCard />
        </div>
    );
};

export default Related;
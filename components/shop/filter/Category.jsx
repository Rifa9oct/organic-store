import { getProducts } from "@/queries/product-queries";

const Category = async () => {
    const products = await getProducts()
    const groceries = products?.filter(item => item.category === "Grocery").length;
    const juice = products?.filter(item => item.category === "Juice").length;

    const categories = [{ category: "Grocery", stock: `${groceries}` }, { category: "Juice", stock: `${juice}` }];

    return (
        <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-10">Categories</h3>

            <div className="space-y-2">
                {
                    categories.map((item, index) => (
                        <div key={index} className="flex items-center">
                            <p className="text-[#8BC34A] text-lg">{item.category}</p>
                            <div className="ml-auto text-gray-600">({item.stock})</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Category;
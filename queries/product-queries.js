import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-utils";
import connectMongo from "@/dbConnect/connectMongo";
import productModel from "@/models/product-model";

const getProducts = async () => {
    await connectMongo();
    let products = await productModel.find();
    return replaceMongoIdInArray(products);
};

const getPerPageProducts = async (title, query, page) => {
    await connectMongo();
    const skip = (page - 1) * 9;
    const category = title === "Juice" ? title : "grocery";

    try {
        let products, totalProduct, searchProducts, categorized;
        
        const allProduct = await productModel.find().skip(skip).limit(9);

        products = replaceMongoIdInArray(allProduct);
        totalProduct = await productModel.countDocuments();

        if (title !== "Shop") {
            categorized = await productModel.find({ category: { $regex: new RegExp(category, "i") } }).skip(skip).limit(9);

            products = replaceMongoIdInArray(categorized);
            totalProduct = await productModel.countDocuments({
                category: { $regex: new RegExp(category, "i") }
            });
        }
        if (query) {
            if (title !== "Shop") {
                searchProducts = categorized.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
            } else {
                searchProducts = products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
            }

            products = searchProducts;
            totalProduct = searchProducts.length;
        }

        return {
            products,
            totalProduct
        };
    } catch (err) {
        throw err;
    }

};


const getProductById = async (productId) => {
    await connectMongo();
    try {
        const singleProduct = await productModel.findById(productId);
        return replaceMongoIdInObject(singleProduct);
    } catch (err) {
        throw err;
    }
};

export {
    getProducts,
    getProductById,
    getPerPageProducts
}
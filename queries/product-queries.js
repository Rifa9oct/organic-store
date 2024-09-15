import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-utils";
import connectMongo from "@/dbConnect/connectMongo";
import productModel from "@/models/product-model";

const getProducts = async () => {
    await connectMongo();
    let products = await productModel.find();
    return replaceMongoIdInArray(products);
};

const getPerPageProducts = async (page, title) => {
    await connectMongo();
    const skip = (page - 1) * 9;
    const category = title === "Juice"? title:"grocery";

    try {
        const allProducts = await productModel.find().skip(skip).limit(9);
        const categorized = await productModel.find({ category: { $regex: new RegExp(category, "i") } }).skip(skip).limit(9);

        const products = replaceMongoIdInArray(allProducts);
        const categorizedProducts = replaceMongoIdInArray(categorized);

        const totalProducts = await productModel.countDocuments();
        const categorizedTotalProducts = await productModel.countDocuments({
            category: { $regex: new RegExp(category, "i") }
        });

        return {
            products,
            totalProducts,
            categorizedProducts,
            categorizedTotalProducts
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
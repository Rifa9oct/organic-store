import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-utils";
import connectMongo from "@/dbConnect/connectMongo";
import productModel from "@/models/product-model";

const getProducts = async () => {
    await connectMongo();
    let products = await productModel.find();
    return replaceMongoIdInArray(products);
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
    getProductById
}
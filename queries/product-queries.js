import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-utils";
import connectMongo from "@/dbConnect/connectMongo";
import productModel from "@/models/product-model";

const getProducts = async () => {
    await connectMongo();
    let products = await productModel.find();
    return replaceMongoIdInArray(products);
};

const getPerPageProducts = async (page) => {
    await connectMongo();
    const skip = (page - 1) * 9;
    try {
        const allProducts = await productModel.find().skip(skip).limit(9);
        const products = replaceMongoIdInArray(allProducts);
        const totalProducts = await productModel.countDocuments();

        return {
            products,
            totalProducts,
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
import { replaceMongoIdInArray } from "@/utils/data-utils";

const { default: connectMongo } = require("@/dbConnect/connectMongo");
const { default: productModel } = require("@/models/product-model");

const getProducts = async () => {
    await connectMongo();
    let products = await productModel.find();
    return replaceMongoIdInArray(products);
};

export {
    getProducts,
}
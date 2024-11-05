import { replaceCartObjectId, replaceCheckoutObject, replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-utils";
import connectMongo from "@/dbConnect/connectMongo";
import productModel from "@/models/product-model";
import cartModel from "@/models/cart-model";
import { revalidatePath } from "next/cache";
import reviewModel from "@/models/review-model";
import checkoutModel from "@/models/checkout-model";

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
        let products, totalProduct, searchProducts;

        const allProduct = await productModel.find().skip(skip).limit(9);

        products = replaceMongoIdInArray(allProduct);
        totalProduct = await productModel.countDocuments();

        if (title !== "Shop") {
            const categorized = await productModel.find({ category: { $regex: new RegExp(category, "i") } }).skip(skip).limit(9);

            products = replaceMongoIdInArray(categorized);
            totalProduct = await productModel.countDocuments({
                category: { $regex: new RegExp(category, "i") }
            });
        }
        if (query) {
            if (title !== "Shop") {
                const categorized = await productModel.find({ category: { $regex: new RegExp(category, "i") } });

                searchProducts = categorized.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
            } else {
                const allProduct = await productModel.find();
                searchProducts = allProduct.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
            }

            products = replaceMongoIdInArray(searchProducts);
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

const getCartByUserId = async (id) => {
    await connectMongo();
    try {
        const carts = await cartModel.find();
        const myCarts = carts.filter(cart => cart.userId.toString() === id);
        return replaceCartObjectId(myCarts);
    } catch (err) {
        throw err;
    }
};

const getDeleteCart = async (productId) => {
    await connectMongo();
    try {
        await cartModel.findOneAndDelete({ productId: productId });

        revalidatePath('/');
        return { status: 200, message: "Your cart deleted successfully!" };
    } catch (err) {
        throw err;
    }
}

const getUpdateCart = async (productId, newQuantity) => {
    await connectMongo();
    try {
        if (newQuantity) {
            const product = await cartModel.findOne({ productId: productId });
            if (product) {
                product.quantityToBuy = newQuantity;
                product.totalPrice = newQuantity * product.price;
                await product.save();
            }
        } else {
            await cartModel.findOneAndDelete({ productId: productId });
            console.log("product", productId);
        }

        revalidatePath('/');
        return { status: 200, message: "Your cart updated successfully!" };
    } catch (err) {
        throw err;
    }
}

const getReviews = async () => {
    await connectMongo();
    const reviews = await reviewModel.find();
    return replaceCartObjectId(reviews);
};

const getCheckout = async () => {
    await connectMongo();
    const recentCheckout = await checkoutModel.find().sort({ date: -1 }).limit(1);
    return replaceCheckoutObject(recentCheckout);
};


export {
    getProducts,
    getProductById,
    getPerPageProducts,
    getCartByUserId,
    getDeleteCart,
    getUpdateCart,
    getReviews,
    getCheckout
}
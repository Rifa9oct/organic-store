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

const getPerPageProducts = async (title, query, page, min, max, sort) => {
    await connectMongo();

    const skip = (page - 1) * 9;
    const category = title === "Juice" ? title : "grocery";

    try {
        let products = [], totalProduct = 0;
        const filter = {};

        if (title !== "Shop") {
            filter.category = { $regex: new RegExp(category, "i") };
        }

        if (query) {
            filter.title = { $regex: new RegExp(query, "i") };
        }

        if (min && max) {
            const minValue = parseFloat(min);
            const maxValue = parseFloat(max);
            filter.price = { $gte: minValue, $lte: maxValue };
        }

        const sortOptions = {};

        if (sort === "popularity") {
            sortOptions.popularity = -1;
        } else if (sort === "latest") {
            sortOptions.createdAt = -1;
        } else if (sort === "low to high") {
            sortOptions.price = 1;
        } else if (sort === "high to low") {
            sortOptions.price = -1;
        }

        const allProducts = await productModel.find(filter).sort(sortOptions).skip(skip).limit(9);

        products = replaceMongoIdInArray(allProducts);
        totalProduct = await productModel.countDocuments(filter);

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

const getReviewsById = async (id) => {
    await connectMongo();
    const reviews = await reviewModel.find({ productId: id });
    return replaceCartObjectId(reviews);
};

const getDeleteReview = async (reviewId) => {
    await connectMongo();
    try {
        await reviewModel.findOneAndDelete({ _id: reviewId });

        revalidatePath('/');
        return { status: 200, message: "Your review deleted successfully!" };
    } catch (err) {
        throw err;
    }
}

const getCheckout = async (email) => {
    await connectMongo();
    const recentCheckout = await checkoutModel.find({ email }).sort({ date: -1 }).limit(1);
    return replaceCheckoutObject(recentCheckout);
};

const getCheckoutProducts = async (email) => {
    await connectMongo();
    const recentCheckoutProducts = await checkoutModel.find({ email }).sort({ date: -1 });
    return replaceCheckoutObject(recentCheckoutProducts);
};

export {
    getProducts,
    getProductById,
    getPerPageProducts,
    getCartByUserId,
    getDeleteCart,
    getUpdateCart,
    getReviews,
    getCheckout,
    getCheckoutProducts,
    getReviewsById,
    getDeleteReview
}
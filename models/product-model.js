import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    reviews: {
        required: false,
        type: Number
    },
    rating: {
        required: true,
        type: Number
    },
    availability: {
        required: true,
        type: String
    },
    quantity:{
        required: true,
        type: Number
    },
    brand: {
        required: true,
        type: String
    },
    category: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    discount: {
        required: false,
        type: Number
    },
    description: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    },
    thumbnail: {
        required: true,
        type: String
    },
    arivalStatus: {
        required: true,
        type: String
    },
});

const productModel = mongoose.models.products || mongoose.model("products", productSchema);

export default productModel;
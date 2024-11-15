import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({
    userId: {
        required: true,
        type: ObjectId
    },
    productId: {
        required: true,
        type: ObjectId
    },
    title: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    quantityToBuy: {
        required: true,
        type: Number
    },
    totalPrice: {
        required: true,
        type: Number
    },
});

const cartModel = mongoose.models.carts || mongoose.model("carts", cartSchema);

export default cartModel;
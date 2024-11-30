import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
    productId: {
        required: true,
        type: ObjectId
    },
    userId: {
        required: true,
        type: ObjectId
    },
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    message: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    },
});

const reviewModel = mongoose.models.reviews || mongoose.model("reviews", reviewSchema);

export default reviewModel;
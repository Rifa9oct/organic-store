import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const checkoutSchema = new Schema({
    userId: {
        required: true,
        type: ObjectId
    },
    firstName: {
        required: true,
        type: String
    },
    lastName: {
        required: true,
        type: String
    },
    company: {
        required: false,
        type: String
    },
    region: {
        required: true,
        type: String
    },
    address: {
        required: true,
        type: String
    },
    district: {
        required: true,
        type: String
    },
    phoneNo: {
        required: true,
        type: Number
    },
    email: {
        required: true,
        type: String
    },
    note: {
        required: false,
        type: String
    },
    buyProducts: {
        required: true,
        type: [
            {
                productId: {
                    required: true,
                    type: ObjectId
                },
                title: {
                    required: true,
                    type: String
                },
                quantityToBuy: {
                    required: true,
                    type: Number
                }
            }
        ]
    },
    totalPrice: {
        required: true,
        type: Number
    },
    date: {
        required: true,
        type: Date
    },
    paymentMethod: {
        required: true,
        type: String
    },
});

const checkoutModel = mongoose.models.checkouts || mongoose.model("checkouts", checkoutSchema);

export default checkoutModel;
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    offerPrice:{
        type: Number,
        required: true
    },
    inStock:{
        type: Boolean,
        default: true,
        required: true
    },
    productImg:{
        type: Array,
        required: true
    }
}, {timestamps: true})

export const Product = mongoose.model("Product", productSchema)
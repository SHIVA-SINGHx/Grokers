import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email:{type: String, required: true},
    street:{type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zipCode: {type: Number, required: true},
    country: {type: String, required: true},
    phoneNumber: {type: String, required: true}
}, {timestamps: true} );

export const Address = mongoose.model("Address", addressSchema);



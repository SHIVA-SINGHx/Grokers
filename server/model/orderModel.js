import moongoose from 'mongoose';

const orderSchema = new moongoose.Schema({
    userId:{
        type: moongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: [
        {
            productId:{
                type: moongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            quantity:{
                type: Number,
                required: true,
                default: 1
            }
        }
    ],
    amount:{
        type: Number,
        required: true
    },
    address: {
        type: moongoose.Schema.Types.ObjectId,
        ref: "Address",
        required: true
    },
    status:{
        type: String,
        default: "order placed"
    },
    paymentType:{
        type: String,
        required: true
    },
    isPaid:{
        type: Boolean,
        default:  false
    }

}, {timestamps: true})

export const Order = moongoose.model("Order", orderSchema);

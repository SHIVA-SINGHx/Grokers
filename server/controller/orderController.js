import { Order } from "../model/orderModel.js";
import { Product } from "../model/productModel.js";
import { User } from "../model/userModel.js";

export const placeOrderCOD = async(req, res)=>{
    try {
        const {userId} = req.user;
        const {items, address}  = req.body;
        if(!items || !address){
            return res.status(400).json({
                success: false,
                message: "Items and address are required to place an order"
            })
        }
        let amount = await items.reduce(async (acc, item)=>{
            const product = await Product.findById(item.product);
            return (await acc) + product.offerPrice * item.qunatity;
        }, 0);
        // Add tax charges 3%
        amount += Math.floor((amount * 3)/ 100);
        await Order.create({
            userId,
            items,
            address,
            amount,
            paymentType: "COD",
            isPaid: false
        })
        res.status(201).json({
            success: true,
            message: "Order placed successfully",
            amount
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
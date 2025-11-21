import { User } from "../model/userModel.js";

// update cart
export const updateCart = async (req, res)=>{
    try {
        const userId = req.user;
        const {cartitems} = req.body;
        const updatedUser = await User.findByIdAndUpdate(userId, {cart: cartitems}, {new: true});
        if(!updatedUser){
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Cart updated successfully",
            updatedUser
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "INterna server error"
        })
    }
}
import { Address } from "../model/addressModel.js";

// add address
export const addAddress = async(req, res)=>{
    try {
        const userId = req.user;
        const {address} = req.body;
        await Address.create({
            ...address,
            userId
        })
        return res.status(201).json({
            success: true,
            message: "Address added successfully"
,        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}
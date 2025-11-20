import { v2 as cloudinary } from "cloudinary";
import { Product } from "../model/productModel";


export const addProduct = async (req, res) =>{
    try {
        const {name, description, category, price, offerPrice} = req.body;
        const images = req.files;
        const imageUrl = await Promise.all(
            images.map(async (item)=>{
                const result = await cloudinary.uploader(item.path, {
                    resource_type: "image",
                })
                return result.secure_url;
            })
        )

        const product = await Product.create({
            name,
            description,
            category,
            price,
            offerPrice,
            productImg: imageUrl
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}
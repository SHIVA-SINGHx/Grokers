import { v2 as cloudinary } from "cloudinary";
import { Product } from "../model/productModel.js";

// add product
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
        
        return res.status(200).json({
            success: true,
            message: "Product added successfully"
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

// get all prodcuts
export const getAllProducts = async (req, res)=>{
    try {
        const prodcuts = await Product.find({}).sort({createdAt: -1 });
        return res.status(200).json({
            success: true,
            prodcuts
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

// get product by id;
export const getProductById = async (req, res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        if(!product){
            return res.status(404).json({
                success: false,
                message: "Product not found"})
        }        
        res.status(200).json({success: true, product})
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

// changestock of product
export const changeStock = async (req, res)=>{
    try {
        const {id, inStock} = req.body;
        const product = await Product.findByIdAndUpdate(id, {inStock}, {new: true});
        if(!product){
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Product stock updated successfully",
            product
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })   
    }
}
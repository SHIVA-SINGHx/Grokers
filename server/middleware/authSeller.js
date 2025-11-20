import jwt from "jsonwebtoken"
import epxress from "express"


export const isSellerAuthenticate = async (req, res, next)=>{
    try {
        const {token} = req.cookies;
        if(!token){
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            })
        }

        let decoded = jwt.verify(token, process.env.SECRET_KEY);
        // asign the id to user
        if(decoded.email === process.env.SELLER_EMAIL){
            next()
        }
        
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        })
        
    }
}
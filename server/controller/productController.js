
// create product
export const createProduct = async(req, res)=>{
    try {
        const {name, description, price, inStock, category} = req.body;
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
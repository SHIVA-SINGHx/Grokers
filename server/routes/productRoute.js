import express from "express"
import { addProduct, getAllProducts, getProductById } from "../controller/productController.js";
import { upload } from "../utils/multer.js";
import { isSellerAuthenticate } from "../middleware/authSeller.js";


const router = express.Router();

router.post("/add-product", upload.array("images"), isSellerAuthenticate , addProduct)
router.get("/get-products", getAllProducts)
router.get("/get-product/:id", getProductById)


export default router;
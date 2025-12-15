import express from "express"
import { addProduct, changeStock, getAllProducts, getProductById } from "../controller/productController.js";
import { upload } from "../config/multer.js";
import { isSellerAuthenticate } from "../middleware/authSeller.js";


const router = express.Router();

router.post("/add-product", isSellerAuthenticate, upload.array("image"), addProduct)
router.get("/get-products", getAllProducts)
router.get("/id", getProductById)
router.get("/stock", isSellerAuthenticate, changeStock)


export default router;
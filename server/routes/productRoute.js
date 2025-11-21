import express from "express"
import { addProduct, getAllProducts } from "../controller/productController.js";

const router = express.Router();

router.post("/add-product", addProduct)
router.get("/get-products", getAllProducts)


export default router;
import express from "express";
import { getUsersOrder, placeOrderCOD } from "../controller/orderController.js";
import { isAuthenticate } from "../middleware/authUser.js";
import { isSellerAuthenticate } from "../middleware/authSeller.js";

const router = express.Router();

router.post("/cod", isAuthenticate, placeOrderCOD);
router.get("/user", isAuthenticate, getUsersOrder);
router.get("/seller", isSellerAuthenticate, getUsersOrder)


export default router;
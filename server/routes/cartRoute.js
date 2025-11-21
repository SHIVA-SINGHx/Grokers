import express from "express"
import { updateCart } from "../controller/cartController.js"
import { isAuthenticate } from "../middleware/authUser.js"

const router = express.Router()

router.put("/update", isAuthenticate ,updateCart);


export default router 
import express from "express"
import { sellerLogin, sellerLogout } from "../controller/sellerController.js"
import { isSellerAuthenticate } from "../middleware/authSeller.js"

const router = express.Router()

router.post("/login", sellerLogin)
router.get("/logout", isSellerAuthenticate , sellerLogout)

export default router 
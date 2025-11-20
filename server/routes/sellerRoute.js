import express from "express"
import { isSellerLogin, sellerLogin, sellerLogout } from "../controller/sellerController.js"
import { isSellerAuthenticate } from "../middleware/authSeller.js"

const router = express.Router()

router.post("/login", sellerLogin)
router.get("/logout", isSellerAuthenticate , sellerLogout)
router.get("/is-auth", isSellerAuthenticate, isSellerLogin)

export default router 
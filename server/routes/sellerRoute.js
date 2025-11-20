import express from "express"
import { sellerLogin } from "../controller/sellerController.js"

const router = express.Router()

router.post("/login", sellerLogin)

export default router 
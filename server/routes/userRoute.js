import express from "express"
import { login, logout, register } from "../controller/userController.js"
import { isAuthenticate } from "../middleware/isAuth.js"

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.get("/logout", isAuthenticate, logout)

export default router
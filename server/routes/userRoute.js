import express from "express"
import { isUserLogin, login, logout, register } from "../controller/userController.js"
import { isAuthenticate } from "../middleware/authUser.js"

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.get("/logout", isAuthenticate, logout)
router.get("/is-auth", isAuthenticate, isUserLogin)

export default router
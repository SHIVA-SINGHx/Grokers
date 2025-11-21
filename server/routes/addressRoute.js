import express from "express";
import { addAddress, getAddress } from "../controller/addressController.js";
import { isAuthenticate } from "../middleware/authUser.js";

const router = express.Router();

router.post("/add", isAuthenticate, addAddress);
router.get("/get", isAuthenticate, getAddress)


export default router;
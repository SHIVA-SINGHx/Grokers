import express, { urlencoded } from "express"
import "dotenv/config"
import cors from "cors"
import { dbConnect } from "./config/db.js"
import cookieParser from "cookie-parser"
import userRoute from "./routes/userRoute.js"
import sellerRoute from "./routes/sellerRoute.js"

const app = express()
const port = process.env.PORT || 8084

// Middleware

const allowOrigins = ["http://localhost:5002"]

app.use(cors({origin: allowOrigins, credentials: true}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get("/", (req, res)=>{
    return res.send("Hello this is running")
})

app.use("/api/user", userRoute);
app.use("/api/seller", sellerRoute)

app.listen(port, ()=>{
    console.log(`server is running ${port}`);
    dbConnect()
    
})
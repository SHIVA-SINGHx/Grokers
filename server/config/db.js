import mongoose from "mongoose";

export const dbConnect = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/Grofers`)
        console.log("Db connected successfully");
        
        
    } catch (error) {
        console.log("Failed to connect db", error);
        
    }
}
import jwt from "jsonwebtoken"

// sellerLogin
export const sellerLogin = async (req, res)=>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({success: false, message: "All fields are required"})
        }

        if(email === process.env.SELLER_EMAIL && password === process.env.SELLER_PASSWORD){
                const token = jwt.sign({ email }, process.env.SECRET_KEY, {
                  expiresIn: "7d",
                });
            
                // store the token in cookie
                res.cookie("token", token, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV === "production",
                  sameSite: process.env.NODE_ENV === "production" ? "none" : "Strict",
                  maxAge: 7 * 24 * 60 * 60 * 1000,
                });
            
                res.status(200).json({
                  success: true,
                  message: "Login successfully",
                  email: email,
                  token,
                });
        }
        
    } catch (error) {
        console.log("Server erro", error); 
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

//sellerLogout
export const sellerLogout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "Strict",
    });

    return res.status(200).json({
      success: true,
      message: "Seller logout successfully",
    });

  } catch (error) {
    console.log("Server error", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

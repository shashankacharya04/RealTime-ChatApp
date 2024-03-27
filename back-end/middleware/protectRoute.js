import jwt from "jsonwebtoken"
import User from "../models/user.models.js"
const protectRoute = async(req,res,next)=>{
    try {
        const Token = req.cookies.jwt
        if(!Token){ 
        return res.status(401).json({
            "error":"unauthorized access"
        })
         }
        const decoded = jwt.verify(Token,process.env.JWT_SECRET)
        if(!decoded){
            return res.status(401).json({
                "error":"unauthorized access --invalid token"
            })
        }
        const user = await User.findById(decoded.userId).select("-password");
        if(!user){
            res.status(404).json({
                error:"user not found"
            })
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("protected:",error.message);
        res.status(500).json({
            message:"internal server error"
        })
    }
}
export default protectRoute
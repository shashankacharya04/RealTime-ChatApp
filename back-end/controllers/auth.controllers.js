import User from "../models/user.models.js";
export const login =(req,res)=>{
console.log("loginuser")
res.send()
}
export const signup =async(req,res)=>{
try{
const {fullName,username,password,confirmPassword,gender} = req.body;
if(password !== confirmPassword){
    return res.status(400).json({

        error:"password do not match"
    })
   
}
const user = await User.findOne({username})
if(user) return res.status(400).json({error:"username already exists"})
}catch{

}
}
export const logout =(req,res)=>{
  console.log("logout")
 res.send() 
}
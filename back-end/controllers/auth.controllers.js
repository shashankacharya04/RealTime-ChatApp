import bcrypt from "bcryptjs"

import User from "../models/user.models.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";


export const signup =async(req,res)=>{
try{
const {fullName,userName,password,confirmPassword,gender} = req.body;
if(password !== confirmPassword){
    return res.status(400).json({

        error:"password do not match"
    })
   
}
const user = await User.findOne({userName})
if(user) return res.status(400).json({error:"username already exists"})

// hash password
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password,salt);
// https://avatar-placeholder.iran.liara.run/
const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`
const newUser = new User({
    fullName,
    userName,
    password:hashedPassword,
    gender,
    profilePic: gender ==="male" ? boyProfilePic : girlProfilePic
})
if(newUser){
    //generate token here
    generateTokenAndSetCookie(newUser._id,res)
    await newUser.save(); //saving details to the servver
    res.status(201).json({
        _id:newUser._id,
        fullName:newUser.fullName,
        username :newUser.userName,
        profilePic:newUser.profilePic
    })
}else{
    res.status(400).json({
        message:"invalid user data"
    })
}

}catch(error){
console.log("error in signup controller",error)
res.status(500).json({
    error:"internal server error"
})
}
}
export const login = async(req,res)=>{
    try {
    const {userName,password}=req.body;
    const user=await User.findOne({userName});
    const isPasswordValid = await bcrypt.compare(password,user?.password || "")
    if(!user || !isPasswordValid){
return res.status(400).json({error:"invalid user details"});

    }
    generateTokenAndSetCookie(user._id,res);
res.status(200).json({
    message:"logged successfully",
    _id:user._id,
        fullName:user.fullName,
        username :user.userName,
        profilePic:user.profilePic
})
    } catch (error) {
       console.log("error in login controller",error)
   res.status(500).json({
       error:"internal server error"
   })
    }
}
export const logout =(req,res)=>{
 try {
    res.cookie("jwt","",{maxAge:0})
    res.status(200).json({message:"logged out successfully"})
 } catch (error) {
    console.log("error in logout controller",error)
    res.status(500).json({
        error:"internal server error"
    })
 }

}
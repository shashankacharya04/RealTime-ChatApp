import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullName:{
        type:"string",
        required:"true"
    },
    userName:{
        type:"string",
        required:"true",
        unique:"true"
    },
    password:{
        type:"string",
        minlength:6,
        required:"true"
    },
    gender:{
           type:"string",
           enum:["male","female"]
    },
    profilePic:{
        type:"string",
        default:""
    }

})
const User =mongoose.model("User",userSchema);
export default User
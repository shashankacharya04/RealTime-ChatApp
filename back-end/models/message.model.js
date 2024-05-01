import mongoose from "mongoose";
const messageSchema = new mongoose.Schema({
senderId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
},
recieverId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
},
message:{
    type:"string"
},
image :{
    type:"string"
},
video :{
    type:"string"
}
},{timestamps:true})
const Message = mongoose.model("Message",messageSchema)
export default Message
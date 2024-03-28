import mongoose from "mongoose";
const conversationSchema = mongoose.Schema({
participants:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
}],
messages:[  
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message",
        default:[]
    }
]
},{timestamps:true})

export const Conversation = mongoose.model("Conversation",conversationSchema)
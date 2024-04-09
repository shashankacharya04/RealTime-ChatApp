import { Conversation } from "../models/conversation.models.js";
import Message from "../models/message.model.js";
import { getRecieverSocketId, io } from "../socket/socket.js";

export const sendMessage =async(req,res)=>{
    try {
        const {message} = req.body
        const {id:recieverId} = req.params;
        const senderId = req.user._id;
        let conversation = await Conversation.findOne({
            participants:{$all: [senderId,recieverId]},
        })
        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,recieverId]
            })
        }
        const newMessage = new Message({
            senderId,
            recieverId,
            message
        })
        if(newMessage ){
            conversation.messages.push(newMessage._id)
        }
        const RecieverSocketId = getRecieverSocketId(recieverId);
        if(RecieverSocketId){
            io.to(RecieverSocketId).emit("newMessage",newMessage)
        }
        // await conversation.save();
        // await newMessage.save();
        await Promise.all([conversation.save(), newMessage.save()]); // runs in parallel instead of waiting for one to finish
        res.status(201).json( // was returning nested object instead of single onject this caused error while sending messages
            newMessage
        ) 

    } catch (error) {
        console.log("error in sendMessage controller",error.message)
        res.status(500).json({
            error:"internal server error"
        })
    }
}
export const getMessage = async(req,res)=>{
    try {
        const {id:userToChat} =req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({participants:{$all:[senderId,userToChat]}}).populate("messages");
        //.populate finds object id name and prints objects
        if(!conversation){return res.status(200).json([])} 
        const messages = conversation?.messages
        // console.log("message type",typeof(messages))
        res.status(200).json(
            messages
        )
    } catch (error) {
        console.log("error in getMessage controller",error.message)
        res.status(500).json({
            error:"internal server error"
        })
    }
}


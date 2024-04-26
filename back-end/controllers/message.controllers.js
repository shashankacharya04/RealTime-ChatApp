import { Conversation } from "../models/conversation.models.js";
import Message from "../models/message.model.js";
import { getRecieverSocketId, io } from "../socket/socket.js";
import {v2 as cloudinary} from "cloudinary";

export const sendMessage =async(req,res)=>{
    try {
        const message = req.body.message
        const {id:recieverId} = req.params;
        const senderId = req.user._id;
        let img = req.body.image;
        let conversation = await Conversation.findOne({
            participants:{$all: [senderId,recieverId]},
        })
        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,recieverId]
            })
        }
        if(img){
            const uploadedImg = await cloudinary.uploader.upload(img);
            img = uploadedImg.secure_url;
        }
        const newMessage = new Message({
            senderId,
            recieverId,
            message,
            image: img || ""
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
        console.log("error in sendMessage controller",error)
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
export const  clearMessage =async(req,res)=>{
    try {
        const loggedUser =req.user._id;
        const userTochat = req.params.id;
        console.log("user to Chat",userTochat);
        let convo = await Conversation.findOne({participants:{$all:[loggedUser,userTochat]}}).populate("messages");
        console.log("convo",convo)
        const messages = convo?.messages;
        const delmsg= await Message.deleteMany({_id:{$in:messages}});
        console.log("del messg are",delmsg); //{ acknowledged: true, deletedCount: 6 }

         await Conversation.findOneAndUpdate({participants:{$all:[loggedUser,userTochat]}},
            {
            $set:{messages:[]}},
            {new:true}
        )
        res.status(200).json({
            message:"message cleared"
        })
        //console.log("del is",del)
        //console.log("convo is",convo);
    } catch (error) {
        console.log("error in clear chat controller",error.message);
        res.status(500).json({
            error:"internal server error"
        })
    }
}

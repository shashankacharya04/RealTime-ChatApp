import { Server, Socket } from "socket.io";
import express  from "express";
import http from 'http';

const app =express();
const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin:["http://localhost:5173"],
        methods:["GET","POST"]
    }
})
const userSocketMap ={};

export const getRecieverSocketId =(RecieverId)=>{
    return userSocketMap[RecieverId];
}

io.on("connection",(socket)=>{
    console.log("user connected",socket.id)
    const userId = socket.handshake.query.userId;
    if(userId !== undefined){
        userSocketMap[userId] = socket.id
    }
    socket.on("beforeTyping",(data)=>{
        
        const socketid = userSocketMap[data.selectedUser];
        // console.log("typed",data);
        // console.log("data is",socketid)
        // console.log("checking",userSocketMap);
        io.to(socketid).emit("typing",{typing:data.typing,from:data.senderId})
    })
    io.emit("getOnlineUser", Object.keys(userSocketMap))
    console.log("getonlineUser",userSocketMap); //{ '6606c2b01607992275c7a8c8': 'H3QTo9w146FYSUybAAAH' }
    socket.on('disconnect',()=>{
        console.log("user disconnected",socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUser",Object.keys(userSocketMap)) // returns array getonlineUser [ '6606c2b01607992275c7a8c8' ]
    })
})

export {app,io,server}
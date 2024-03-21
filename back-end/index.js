const express =require('express');
const app =express();
const http =require("http");
const {Server} =require('socket.io');

const cors = require('cors');
const port = 3000 || process.env.port;
app.use(cors());
const server =http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:['GET','POST']
    }
})
io.on("connection",(socket)=>{
    console.log(`sockets are ${socket.id}`);
    socket.on("send_message",(data)=>{
        socket.to(data.room).emit("recieve_message",data)
        console.log("data is",data)
        // socket.emit("recieve_message",data);
        // socket.broadcast.emit("recieve_message",data);
    })
    socket.on("join_room",(room)=>{
        console.log("roomis",room)
        socket.join(room);
    })
})
server.listen(port,()=>{
    console.log(`app is listening on ${port}`)
})
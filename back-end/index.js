import path from "path"
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import {app,server} from "./socket/socket.js"

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/users.routes.js"


import connectToMongoDb from "./db/connectToMongoDb.js";

dotenv.config(); // used to use ports from .env file


const PORT = process.env.PORT || 3000
const __dirname = path.resolve();

app.use(cookieParser())
app.use(express.json());   //parsing requests with json payload  req.body

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/user",userRoutes);

app.use(express.static(path.join(__dirname,"/client/dist")));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"client","dist","index.html"));
})

server.listen(PORT,()=>{
    connectToMongoDb();
console.log(`listening on port ${PORT}`)
})
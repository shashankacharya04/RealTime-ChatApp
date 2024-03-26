import express from "express"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.routes.js"
import connectToMongoDb from "./db/connectToMongoDb.js";

dotenv.config(); // used to use ports from .env file

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    connectToMongoDb();
console.log(`listening on port ${PORT}`)
})
import mongoose from "mongoose";
const connectToMongoDb = async()=>{
    try {
       await mongoose.connect(process.env.MONGO_DB_COMPASS) ; //connected to mongoDb Compass
       console.log("connected to mongoDB")
    } catch (error) {
        console.log("something went wrong",error.message)
    }
}

export default connectToMongoDb
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo DB connect succesfully");
        
    } catch (error) {
        console.log(error);
        
    }
}
export default connectDB;
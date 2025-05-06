import mongoose from "mongoose";

const connectDB = async()=>{
    try {

        mongoose.connection.on('connected',()=>{
            console.log("DataBase Connected")
        })

       await mongoose.connect(`${process.env.MONGODB_URL}/greencart`)
        
    } catch (error) {
        console.error(error.message);
    }
}

export default connectDB;
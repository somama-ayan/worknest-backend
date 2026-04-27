import mongoose from "mongoose";


export const connectDb = async () => {
    
    try {
        const conn = mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to mongoDB Atlas')
        // console.log(`Connected to ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error Connecting to MongoDB: ${error.message}`)
        process.exit(1) // status code 1 is failure , & 0 is success
    }
}
import mongoose from "mongoose"


export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to MongoDB.')
        // console.log("DB:", mongoose.connection.name);
// console.log("URI:", process.env.MONGO_URI);
    } catch (error) {
        console.log(`Error Connecting to MongoDB: ${error.message}`)
        process.exit(1)
    }
}
import dotenv from "dotenv"

import app from "./app.js";
import { connectDb } from "./config/db.js";

dotenv.config();
const PORT = process.env.PORT || 5000

const startServer = async () => {
    try {
        await connectDb()
        app.listen(PORT, () => {
            console.log(`Server listening on PORT: ${PORT}`)
        })
    } catch (error) {
        console.error("Startup error:", error)
        process.exit(1)
    }
}

startServer()
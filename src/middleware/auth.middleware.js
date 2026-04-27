import jwt from "jsonwebtoken"

import User from "../models/user.model.js"
import { AppError } from "../utils/AppError.js";

export const authMiddleware = async (req, res , next) => {
    try {
        const token = req.cookies.token;
        
        if(!token) throw new AppError("Unauthorized", 401)
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await User.findById(decoded.id).select("-password")

        if(!user) throw new AppError("User Not Found.", 404)

        req.user = user; 
        next();
        
    } catch (error) {
        next(error)
    }
}
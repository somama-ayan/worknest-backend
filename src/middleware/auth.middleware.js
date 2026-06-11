import jwt from "jsonwebtoken";

import { AppError } from "../utils/AppError.js";
import userModel from "../models/user.model.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) throw new AppError("Unauthorized", 401);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.id);
    if (!user) throw new AppError("User not Found.", 404);

    req.user = {
      id: user._id,
      email: user.email,
      role: user.role,
    };
    next();
  } catch (error) {
    next(error);
  }
};

import { signInService, signUpService } from "../services/auth.service.js";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

export const signUpController = async (req, res, next) => {
  try {
    const { user, token } = await signUpService(req.body);

    res.cookie("token", token, cookieOptions);
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const signInController = async (req, res, next) => {
  try {
    const { user, token } = await signInService(req.body);

    res.cookie("token", token, cookieOptions);

    return res.status(200).json({
      success: true,
      message: "User Signed In successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const signOutController = async (req, res, next) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
  });
  return res.status(200).json({
    success: true,
    message: "User Signed Out successfully."
  })
};

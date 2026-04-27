import bcrypt from "bcryptjs"

import { userValidSchema, loginValidSchema } from "../validations/auth.validation.js";
import User from "../models/user.model.js"
import { AppError } from "../utils/AppError.js";
import { generateToken } from "../utils/generateTokens.js";

export const signUpUserService = async (data)  => {
  const {error , value} = userValidSchema.validate(data);
  if(error) throw new AppError(error.details[0].message, 422);

  const {fullName, email , password}  = value;
  const existingUser = await User.findOne({email});
  if(existingUser) throw new AppError("User Already Exist",409);
  
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password , salt);

  const user = User.create({
    fullName, 
    email,
     password: hashPassword
  })

  const token = generateToken(user._id);

  return { user , token };

} 

export const signInUserService = async (data) => {
  const {error , value} = loginValidSchema.validate(data);

  if(error) throw new AppError(error.details[0].message, 422);

  const { email, password } = value;

  const user = await User.findOne({ email });

  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new AppError("Invalid email or password", 401);
  }

  const token = generateToken(user._id);

  return { user, token };

}
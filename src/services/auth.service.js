import bcrypt from "bcryptjs";

import userModel from "../models/user.model.js";
import { AppError } from "../utils/AppError.js";
import { signinValidation, signupValidation } from "../validations/auth.validation.js"
import { generateToken } from "../utils/generateTokens.js";


export const signUpService = async (data) => {
  const {error , value} = await signupValidation.validate(data);
  
//   check data validation
    if(error) throw new AppError(error.details[0].message, 422)

    const {fullName , email, password} = value;

//  check if user already exists
    const findUser = await userModel.findOne({email});
    if(findUser) throw new AppError("User Already Exist.", 409)

//  Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
//  create user.
    const user = userModel.create({
        fullName,
        email,
        password: hashedPassword
    })
// generateToken 
    const token = generateToken(user._id);
    return {token , user}
} 

export const signInService = async (data) => {
    const {error , value } = await signinValidation.validate(data)

    // check if body data is valid or not
    if(error) throw new AppError(error.details[0].message, 422);

    // check if user does not exists
    const { email, password } = value;  
    const user = await userModel.findOne({email});
    if(!user) throw new AppError("Invalid Credentials.",401);

    // compare password 
    const matchPass = await bcrypt.compare(password, user.password);
    if(!matchPass) throw new AppError("Invalid Credentials.", 401)
    
    const token = generateToken(user._id);

    return {token, user}
}
import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'
export const registerUser = async (data) => {
    const { fullName , email , password } = data;

    const existingUser = await User.findOne({email});
    if(existingUser) throw new Error('User already Exists.')
    
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        fullName,
        email,
        hashedPassword
    })
    return user
} 
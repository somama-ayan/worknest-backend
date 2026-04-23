import express from 'express';
import { registerUser } from '../services/auth.service.js';

export const register = async (req ,res) => {
    try{
        const user = await registerUser(req.body)
        res.status(201).json({
            message: 'User Registered Successfully!',
            user,
        })

    }catch(err)
    {
        res.status(400).json({
            message: err.message
        })
    }
}
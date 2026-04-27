import Joi from "joi";

export const userValidSchema = Joi.object({
  fullName: Joi.string().trim().min(3).max(40).required(),
  email: Joi.string().trim().email().lowercase().required(),
  password: Joi.string().min(6).max(30).required(),
});

export const loginValidSchema = Joi.object({
  email: Joi.string().trim().email().lowercase().required(),
  password: Joi.string().required(),
});
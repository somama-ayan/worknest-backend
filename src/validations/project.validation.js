import Joi from "joi";

export const addNewProjectValidation = Joi.object({
  name: Joi.string().trim().min(3).max(100).required(),
  project_key: Joi.string()
    .trim()
    .min(3)
    .max(100)
    .pattern(/^[A-Z]{3}\d{3}$/)
    .required(),
  category: Joi.string()
    .valid("web", "mobile", "backend", "devops", "other")
    .required(),
  description: Joi.string()
  .trim()
  .min(5)
  .max(100)
  .required(),

  target_completion_date: Joi.date()
  .required(),
});

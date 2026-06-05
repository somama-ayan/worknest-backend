import Joi from "joi";

export const addNewTaskValidation = Joi.object({
  title: Joi.string().trim().min(3).max(50).required(),
  project: Joi.string().trim().min(3).max(100).required(),
  status: Joi.string()
    .valid("todo", "in-progress", "in-review", "done")
    .required(),
  priority: Joi.string()
    .valid("low", "medium", "high")
    .required(),
  description: Joi.string().trim().min(5).max(100).required(),

  //   target_completion_date: Joi.date()
  //   .required(),
});

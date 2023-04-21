import joi from "joi";

const createAccountSchema = joi.object({
  name: joi.string().empty().max(255).required(),
  email: joi.string().empty().email().max(255).required(),
  password: joi.string().empty().max(255).required(),
});

const loginSchema = joi.object({
  email: joi.string().empty().email().max(200).required(),
  password: joi.string().empty().max(255).required(),
});

export { createAccountSchema, loginSchema };

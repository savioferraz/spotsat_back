import joi from "joi";

const tokenSchema = joi.object({
  token: joi.string().empty().length(36).required(),
});

export { tokenSchema };

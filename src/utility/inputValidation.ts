import Joi from "joi";

export const searchGeminiContentReq = Joi.object({
  text: Joi.string().required(),
});

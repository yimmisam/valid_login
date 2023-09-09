import Joi from "joi";

export const redirectSchema = Joi.object().keys({
  shortUrl: Joi.string().required(),
  destinationUrl: Joi.string().required(),
});

export const validateRedirect = (data) => {
  const { error } = redirectSchema.validate(data, { abortEarly: false });
  if (error) {
    const messages = error.details.map((detail) => detail.message);
    return { valid: false, errors: messages };
  }
  return { valid: true };
};

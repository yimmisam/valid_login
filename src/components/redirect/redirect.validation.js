import Joi from "joi";

export const redirectSchema = Joi.object().keys({
  shortUrl: Joi.string().required(),
  destinationUrl: Joi.string().required(),
});

export const getRedirectSchema = Joi.object().keys({
  url: Joi.string().required().min(8).max(10).alphanum(),
});

export const validateRedirect = (data) => {
  const { error } = redirectSchema.validate(data, { abortEarly: false });
  if (error) {
    const messages = error.details.map((detail) => detail.message);
    return { valid: false, errors: messages };
  }
  return { valid: true };
};

export const validateGetRedirect = (data) => {
  const { error } = getRedirectSchema.validate(data, { abortEarly: false });
  if (error) {
    const messages = error.details.map((detail) => detail.message);
    return { valid: false, errors: messages };
  }
  return { valid: true };
};

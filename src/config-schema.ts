import * as Joi from '@hapi/joi';

export const configValidationSchema = Joi.object({
  GREETING_NAME: Joi.string().required(),
});

import * as Joi from '@hapi/joi';

export const createOtherRouterSchema = Joi.object({
  valueOne: Joi.string(),
  valueTwo: Joi.string().required()
});
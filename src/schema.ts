import * as Joi from "joi";

export const Schema = Joi.object().keys({
  uid: Joi.string(),
  context: Joi.object(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
});

export const UserSchema = Schema.keys({
  username: Joi.string().min(3),
  email: Joi.string().email(),
  password: Joi.string().min(5),
  keys: Joi.array(),
});

export const AddressSchema = Joi.object().keys({
  city: Joi.string().required(),
  street: Joi.string().required(),
  street2: Joi.string(),
  postalCode: Joi.number().required(),
  county: Joi.string().required(),
  country: Joi.string(),
});

export const SearchOptionsSchema = Joi.object().keys({
  limit: Joi.number(),
  offset: Joi.number(),
  orderBy: Joi.string(),
  direction: Joi.string().equal("asc", "desc"),
  scope: Joi.string(),
  searchBy: Joi.string(),
  search: Joi.string(),
});

export const StatisticsOptionsSchema = Joi.object().keys({
  period: Joi.string(),
  limit: Joi.number(),
  offset: Joi.number(),
  orderBy: Joi.string(),
  direction: Joi.string().equal("asc", "desc"),
  scope: Joi.string(),
  searchBy: Joi.string(),
  search: Joi.string(),
});

export const GetSchema = Schema.keys({
  uid: Joi.string().required(),
});

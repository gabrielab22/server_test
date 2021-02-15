import { Router } from "express";
import * as Joi from "joi";
import * as jwt from "jsonwebtoken";

const LoginSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required(),
});

const login = Router();

login.post("", async (req, res, next) => {
  try {
    console.log("body", req);
    const { error } = Joi.validate(req.body, LoginSchema);
    if (error) return res.status(400).json(error);

    const { email, password } = req.body;

    if (email != "gabi@email.com")
      return res
        .status(401)
        .json({ error: "User with that email is not found" });

    if (password != "gabi123")
      return res.status(401).json({ error: "Password is not correct" });

    const context = { email };

    const token = jwt.sign(context, "do_not_share_this", {
      expiresIn: "7d",
    });

    return res.status(200).json({ token });
  } catch (e) {
    next(e);
  }
});

export { login };

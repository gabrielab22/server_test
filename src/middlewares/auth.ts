import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import * as _ from "lodash";
import { GenericError } from "../services/Error";

export const Auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.token || req.body.token || req.query.token;

  if (!token) return next(new GenericError("Token not provided!"));

  jwt.verify(token, "do_not_share_this", async (error: any, context: any) => {
    if (error) return next(new GenericError("Token is not verified"));

    req.body = {
      ...req.body,
      context,
    };

    next();
  });
};

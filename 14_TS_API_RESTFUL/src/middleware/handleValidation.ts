import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const erros = validationResult(req);

  if (erros.isEmpty()) {
    return next();
  }

  const extratectErros: object[] = [];

  erros.array().map((err) => extratectErros.push({ [err.param]: err.msg }));

  return res.status(422).json({
    erros: extratectErros,
  });
};

import { getInjection } from "@/di/container";
import { NextFunction, Request, Response } from "express";

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const input = req.body;

    const signUpController = getInjection("auth", "ISignUpController");
    const user = await signUpController(input);

    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

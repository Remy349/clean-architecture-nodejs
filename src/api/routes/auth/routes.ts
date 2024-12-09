import { Router } from "express";
import { signUp } from "./auth.route";

export const authRouter = Router();

authRouter.post("/sign-up", signUp);

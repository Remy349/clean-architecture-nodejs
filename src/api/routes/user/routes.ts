import { Router } from "express";
import { getAllUsers, getUserById } from "./user.route";

export const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);

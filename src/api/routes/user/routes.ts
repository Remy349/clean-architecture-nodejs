import { Router } from "express";
import { deleteUser, getAllUsers, getUserById } from "./user.route";

export const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.delete("/:id", deleteUser);

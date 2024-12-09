import { getInjection } from "@/di/container";
import { NextFunction, Request, Response } from "express";

export const getAllUsers = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const getAllUsersController = getInjection(
      "users",
      "IGetAllUsersController",
    );
    const users = await getAllUsersController();

    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = Number(req.params.id);

    const getUserByIdController = getInjection(
      "users",
      "IGetUserByIdController",
    );
    const user = await getUserByIdController(userId);

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = Number(req.params.id);

    const deleteUserController = getInjection("users", "IDeleteUserController");
    await deleteUserController(userId);

    res.status(200).json({ message: "User successfully deleted" });
  } catch (err) {
    next(err);
  }
};

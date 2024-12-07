import { getInjection } from "@/di/container";
import { NextFunction, Request, Response } from "express";

export const getAllCategories = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const getAllCategoriesController = getInjection(
      "IGetAllCategoriesController",
    );
    const categories = await getAllCategoriesController();

    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};

export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const input = req.body;

    const createCategoryController = getInjection("ICreateCategoryController");
    const category = await createCategoryController(input);

    res.status(201).json(category);
  } catch (err) {
    next(err);
  }
};

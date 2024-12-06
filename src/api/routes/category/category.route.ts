import { CreateCategoryUseCase } from "@/application/use-cases/category/create-category.use-case";
import { GetAllCategoriesUseCase } from "@/application/use-cases/category/get-all-categories.use-case";
import { CategoryRepository } from "@/infrastructure/repositories/category.repository";
import { CreateCategoryController } from "@/interface-adapters/controllers/category/create-category.controller";
import { GetAllCategoriesController } from "@/interface-adapters/controllers/category/get-all-categories.controller";
import { NextFunction, Request, Response } from "express";

const categoryRepository = new CategoryRepository();

const getAllCategoriesUseCase = new GetAllCategoriesUseCase(categoryRepository);
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);

const getAllCategoriesController = new GetAllCategoriesController(
  getAllCategoriesUseCase,
);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase,
);

export const getAllCategories = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const categories = await getAllCategoriesController.run();

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

    const category = await createCategoryController.run(input);

    res.status(201).json(category);
  } catch (err) {
    next(err);
  }
};

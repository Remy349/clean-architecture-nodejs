import { CreateCategoryUseCase } from "@/application/use-cases/category/create-category.use-case";
import { CategoryRepository } from "@/infrastructure/repositories/category.repository";
import { CreateCategoryController } from "@/interface-adapters/controllers/category/create-category.controller";
import { Request, Response } from "express";

const categoryRepository = new CategoryRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase,
);

export const getAllCategories = async (_req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "CATEGORIES HERE" });
  } catch (err) {
    console.error("====> ERROR FROM API", err);
    res
      .status(500)
      .json({ message: "Internal server error while fetching categories" });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const input = req.body;

    const category = await createCategoryController.run(input);

    res.status(200).json(category);
  } catch (err) {
    console.error("====> ERROR FROM API", err);
    res
      .status(500)
      .json({ message: "Internal server error while creating category" });
  }
};

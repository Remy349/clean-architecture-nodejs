import { CreateCategoryUseCase } from "@/application/use-cases/category/create-category.use-case";
import { CategoryRepository } from "@/infrastructure/repositories/category.repository";
import { CreateCategoryController } from "@/interface-adapters/controllers/category/create-category.controller";
import { Request, Response } from "express";

const categoryRepository = new CategoryRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase,
);

export class CategoryRoute {
  static async create(req: Request, res: Response) {
    try {
      const input = req.body;

      const category = await createCategoryController.run(input);

      res.status(200).json(category);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

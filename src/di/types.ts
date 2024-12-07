import { ICategoryRepository } from "@/application/repositories/category.repository.interface";
import { ICreateCategoryUseCase } from "@/application/use-cases/category/create-category.use-case";
import { IGetAllCategoriesUseCase } from "@/application/use-cases/category/get-all-categories.use-case";
import { ICreateCategoryController } from "@/interface-adapters/controllers/category/create-category.controller";
import { IGetAllCategoriesController } from "@/interface-adapters/controllers/category/get-all-categories.controller";

export const DI_SYMBOLS = {
  // Repositories
  ICategoryRepository: Symbol.for("ICategoryRepository"),
  // Use Cases
  IGetAllCategoriesUseCase: Symbol.for("IGetAllCategoriesUseCase"),
  ICreateCategoryUseCase: Symbol.for("ICreateCategoryUseCase"),
  // Controllers
  IGetAllCategoriesController: Symbol.for("IGetAllCategoriesController"),
  ICreateCategoryController: Symbol.for("ICreateCategoryController"),
};

export type DI_RETURN_TYPES = {
  // Repositories
  ICategoryRepository: ICategoryRepository;
  // Use Cases
  IGetAllCategoriesUseCase: IGetAllCategoriesUseCase;
  ICreateCategoryUseCase: ICreateCategoryUseCase;
  // Controllers
  IGetAllCategoriesController: IGetAllCategoriesController;
  ICreateCategoryController: ICreateCategoryController;
};

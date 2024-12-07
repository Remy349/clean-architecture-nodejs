import { ICategoryRepository } from "@/application/repositories/category.repository.interface";
import { ICreateCategoryUseCase } from "@/application/use-cases/category/create-category.use-case";
import { IDeleteCategoryUseCase } from "@/application/use-cases/category/delete-category.use-case";
import { IGetAllCategoriesUseCase } from "@/application/use-cases/category/get-all-categories.use-case";
import { IGetCategoryByIdUseCase } from "@/application/use-cases/category/get-category-by-id.use-case";
import { ICreateCategoryController } from "@/interface-adapters/controllers/category/create-category.controller";
import { IDeleteCategoryController } from "@/interface-adapters/controllers/category/delete-category.controller";
import { IGetAllCategoriesController } from "@/interface-adapters/controllers/category/get-all-categories.controller";
import { IGetCategoryByIdController } from "@/interface-adapters/controllers/category/get-category-by-id.controller";

export const DI_SYMBOLS = {
  // Repositories
  ICategoryRepository: Symbol.for("ICategoryRepository"),
  // Use Cases
  IGetAllCategoriesUseCase: Symbol.for("IGetAllCategoriesUseCase"),
  IGetCategoryByIdUseCase: Symbol.for("IGetCategoryByIdUseCase"),
  ICreateCategoryUseCase: Symbol.for("ICreateCategoryUseCase"),
  IDeleteCategoryUseCase: Symbol.for("IDeleteCategoryUseCase"),
  // Controllers
  IGetAllCategoriesController: Symbol.for("IGetAllCategoriesController"),
  IGetCategoryByIdController: Symbol.for("IGetCategoryByIdController"),
  ICreateCategoryController: Symbol.for("ICreateCategoryController"),
  IDeleteCategoryController: Symbol.for("IDeleteCategoryController"),
};

export type DI_RETURN_TYPES = {
  // Repositories
  ICategoryRepository: ICategoryRepository;
  // Use Cases
  IGetAllCategoriesUseCase: IGetAllCategoriesUseCase;
  IGetCategoryByIdUseCase: IGetCategoryByIdUseCase;
  ICreateCategoryUseCase: ICreateCategoryUseCase;
  IDeleteCategoryUseCase: IDeleteCategoryUseCase;
  // Controllers
  IGetAllCategoriesController: IGetAllCategoriesController;
  IGetCategoryByIdController: IGetCategoryByIdController;
  ICreateCategoryController: ICreateCategoryController;
  IDeleteCategoryController: IDeleteCategoryController;
};

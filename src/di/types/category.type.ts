import { ICategoryRepository } from "@/application/repositories/category.repository.interface";
import { ICreateCategoryUseCase } from "@/application/use-cases/category/create-category.use-case";
import { IDeleteCategoryUseCase } from "@/application/use-cases/category/delete-category.use-case";
import { IGetAllCategoriesUseCase } from "@/application/use-cases/category/get-all-categories.use-case";
import { IGetCategoryByIdUseCase } from "@/application/use-cases/category/get-category-by-id.use-case";
import { ICreateCategoryController } from "@/interface-adapters/controllers/category/create-category.controller";
import { IDeleteCategoryController } from "@/interface-adapters/controllers/category/delete-category.controller";
import { IGetAllCategoriesController } from "@/interface-adapters/controllers/category/get-all-categories.controller";
import { IGetCategoryByIdController } from "@/interface-adapters/controllers/category/get-category-by-id.controller";

export const DI_CATEGORY_SYMBOLS = {
  // REPOSITORY
  ICategoryRepository: Symbol.for("ICategoryRepository"),
  // USE CASES
  IGetAllCategoriesUseCase: Symbol.for("IGetAllCategoriesUseCase"),
  IGetCategoryByIdUseCase: Symbol.for("IGetCategoryByIdUseCase"),
  ICreateCategoryUseCase: Symbol.for("ICreateCategoryUseCase"),
  IDeleteCategoryUseCase: Symbol.for("IDeleteCategoryUseCase"),
  // CONTROLLERS
  IGetAllCategoriesController: Symbol.for("IGetAllCategoriesController"),
  IGetCategoryByIdController: Symbol.for("IGetCategoryByIdController"),
  ICreateCategoryController: Symbol.for("ICreateCategoryController"),
  IDeleteCategoryController: Symbol.for("IDeleteCategoryController"),
};

export type DI_CATEGORY_RETURN_TYPES = {
  // REPOSITORY
  ICategoryRepository: ICategoryRepository;
  // USE CASES
  IGetAllCategoriesUseCase: IGetAllCategoriesUseCase;
  IGetCategoryByIdUseCase: IGetCategoryByIdUseCase;
  ICreateCategoryUseCase: ICreateCategoryUseCase;
  IDeleteCategoryUseCase: IDeleteCategoryUseCase;
  // CONTROLLERS
  IGetAllCategoriesController: IGetAllCategoriesController;
  IGetCategoryByIdController: IGetCategoryByIdController;
  ICreateCategoryController: ICreateCategoryController;
  IDeleteCategoryController: IDeleteCategoryController;
};

import { createModule } from "@evyweb/ioctopus";
import { DI_SYMBOLS } from "../types";
import { CategoryRepository } from "@/infrastructure/repositories/category.repository";
import { createCategoryUseCase } from "@/application/use-cases/category/create-category.use-case";
import { getAllCategoriesUseCase } from "@/application/use-cases/category/get-all-categories.use-case";
import { getAllCategoriesController } from "@/interface-adapters/controllers/category/get-all-categories.controller";
import { createCategoryController } from "@/interface-adapters/controllers/category/create-category.controller";
import { getCategoryByIdUseCase } from "@/application/use-cases/category/get-category-by-id.use-case";
import { deleteCategoryUseCase } from "@/application/use-cases/category/delete-category.use-case";
import { getCategoryByIdController } from "@/interface-adapters/controllers/category/get-category-by-id.controller";
import { deleteCategoryController } from "@/interface-adapters/controllers/category/delete-category.controller";

export const createCategoryModule = () => {
  const categoryModule = createModule();

  // REPOSITORY
  categoryModule
    .bind(DI_SYMBOLS.categories.ICategoryRepository)
    .toClass(CategoryRepository);

  // USE CASES
  categoryModule
    .bind(DI_SYMBOLS.categories.IGetAllCategoriesUseCase)
    .toHigherOrderFunction(getAllCategoriesUseCase, [
      DI_SYMBOLS.categories.ICategoryRepository,
    ]);
  categoryModule
    .bind(DI_SYMBOLS.categories.IGetCategoryByIdUseCase)
    .toHigherOrderFunction(getCategoryByIdUseCase, [
      DI_SYMBOLS.categories.ICategoryRepository,
    ]);
  categoryModule
    .bind(DI_SYMBOLS.categories.ICreateCategoryUseCase)
    .toHigherOrderFunction(createCategoryUseCase, [
      DI_SYMBOLS.categories.ICategoryRepository,
    ]);
  categoryModule
    .bind(DI_SYMBOLS.categories.IDeleteCategoryUseCase)
    .toHigherOrderFunction(deleteCategoryUseCase, [
      DI_SYMBOLS.categories.ICategoryRepository,
    ]);

  // CONTROLLERS
  categoryModule
    .bind(DI_SYMBOLS.categories.IGetAllCategoriesController)
    .toHigherOrderFunction(getAllCategoriesController, [
      DI_SYMBOLS.categories.IGetAllCategoriesUseCase,
    ]);
  categoryModule
    .bind(DI_SYMBOLS.categories.IGetCategoryByIdController)
    .toHigherOrderFunction(getCategoryByIdController, [
      DI_SYMBOLS.categories.IGetCategoryByIdUseCase,
    ]);
  categoryModule
    .bind(DI_SYMBOLS.categories.ICreateCategoryController)
    .toHigherOrderFunction(createCategoryController, [
      DI_SYMBOLS.categories.ICreateCategoryUseCase,
    ]);
  categoryModule
    .bind(DI_SYMBOLS.categories.IDeleteCategoryController)
    .toHigherOrderFunction(deleteCategoryController, [
      DI_SYMBOLS.categories.IDeleteCategoryUseCase,
    ]);

  return categoryModule;
};

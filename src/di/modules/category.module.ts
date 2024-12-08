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
  // Repository
  categoryModule
    .bind(DI_SYMBOLS.ICategoryRepository)
    .toClass(CategoryRepository);

  // Use Cases
  categoryModule
    .bind(DI_SYMBOLS.IGetAllCategoriesUseCase)
    .toHigherOrderFunction(getAllCategoriesUseCase, [
      DI_SYMBOLS.ICategoryRepository,
    ]);
  categoryModule
    .bind(DI_SYMBOLS.IGetCategoryByIdUseCase)
    .toHigherOrderFunction(getCategoryByIdUseCase, [
      DI_SYMBOLS.ICategoryRepository,
    ]);
  categoryModule
    .bind(DI_SYMBOLS.ICreateCategoryUseCase)
    .toHigherOrderFunction(createCategoryUseCase, [
      DI_SYMBOLS.ICategoryRepository,
    ]);
  categoryModule
    .bind(DI_SYMBOLS.IDeleteCategoryUseCase)
    .toHigherOrderFunction(deleteCategoryUseCase, [
      DI_SYMBOLS.ICategoryRepository,
    ]);

  // Controllers
  categoryModule
    .bind(DI_SYMBOLS.IGetAllCategoriesController)
    .toHigherOrderFunction(getAllCategoriesController, [
      DI_SYMBOLS.IGetAllCategoriesUseCase,
    ]);
  categoryModule
    .bind(DI_SYMBOLS.IGetCategoryByIdController)
    .toHigherOrderFunction(getCategoryByIdController, [
      DI_SYMBOLS.IGetCategoryByIdUseCase,
    ]);
  categoryModule
    .bind(DI_SYMBOLS.ICreateCategoryController)
    .toHigherOrderFunction(createCategoryController, [
      DI_SYMBOLS.ICreateCategoryUseCase,
    ]);
  categoryModule
    .bind(DI_SYMBOLS.IDeleteCategoryController)
    .toHigherOrderFunction(deleteCategoryController, [
      DI_SYMBOLS.IDeleteCategoryUseCase,
    ]);

  return categoryModule;
};

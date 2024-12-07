import { createModule } from "@evyweb/ioctopus";
import { DI_SYMBOLS } from "../types";
import { CategoryRepository } from "@/infrastructure/repositories/category.repository";
import { createCategoryUseCase } from "@/application/use-cases/category/create-category.use-case";
import { getAllCategoriesUseCase } from "@/application/use-cases/category/get-all-categories.use-case";
import { getAllCategoriesController } from "@/interface-adapters/controllers/category/get-all-categories.controller";
import { createCategoryController } from "@/interface-adapters/controllers/category/create-category.controller";

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
    .bind(DI_SYMBOLS.ICreateCategoryUseCase)
    .toHigherOrderFunction(createCategoryUseCase, [
      DI_SYMBOLS.ICategoryRepository,
    ]);
  // Controllers
  categoryModule
    .bind(DI_SYMBOLS.IGetAllCategoriesController)
    .toHigherOrderFunction(getAllCategoriesController, [
      DI_SYMBOLS.IGetAllCategoriesUseCase,
    ]);
  categoryModule
    .bind(DI_SYMBOLS.ICreateCategoryController)
    .toHigherOrderFunction(createCategoryController, [
      DI_SYMBOLS.ICreateCategoryUseCase,
    ]);

  return categoryModule;
};

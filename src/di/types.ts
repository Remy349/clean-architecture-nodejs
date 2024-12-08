import { ICategoryRepository } from "@/application/repositories/category.repository.interface";
import { IUserRepository } from "@/application/repositories/user.repository.interface";
import { ICreateCategoryUseCase } from "@/application/use-cases/category/create-category.use-case";
import { IDeleteCategoryUseCase } from "@/application/use-cases/category/delete-category.use-case";
import { IGetAllCategoriesUseCase } from "@/application/use-cases/category/get-all-categories.use-case";
import { IGetCategoryByIdUseCase } from "@/application/use-cases/category/get-category-by-id.use-case";
import { IGetAllUsersUseCase } from "@/application/use-cases/user/get-all-users.use-case";
import { IGetUserByIdUseCase } from "@/application/use-cases/user/get-user-by-id.use-case";
import { ICreateCategoryController } from "@/interface-adapters/controllers/category/create-category.controller";
import { IDeleteCategoryController } from "@/interface-adapters/controllers/category/delete-category.controller";
import { IGetAllCategoriesController } from "@/interface-adapters/controllers/category/get-all-categories.controller";
import { IGetCategoryByIdController } from "@/interface-adapters/controllers/category/get-category-by-id.controller";
import { IGetAllUsersController } from "@/interface-adapters/controllers/user/get-all-users.controller";
import { IGetUserByIdController } from "@/interface-adapters/controllers/user/get-user-by-id.controller";

export const DI_SYMBOLS = {
  // Repositories
  IUserRepository: Symbol.for("IUserRepository"),
  ICategoryRepository: Symbol.for("ICategoryRepository"),

  // Use Cases
  IGetAllUsersUseCase: Symbol.for("IGetAllUsersUseCase"),
  IGetUserByIdUseCase: Symbol.for("IGetUserByIdUseCase"),

  IGetAllCategoriesUseCase: Symbol.for("IGetAllCategoriesUseCase"),
  IGetCategoryByIdUseCase: Symbol.for("IGetCategoryByIdUseCase"),
  ICreateCategoryUseCase: Symbol.for("ICreateCategoryUseCase"),
  IDeleteCategoryUseCase: Symbol.for("IDeleteCategoryUseCase"),

  // Controllers
  IGetAllUsersController: Symbol.for("IGetAllUsersController"),
  IGetUserByIdController: Symbol.for("IGetUserByIdController"),

  IGetAllCategoriesController: Symbol.for("IGetAllCategoriesController"),
  IGetCategoryByIdController: Symbol.for("IGetCategoryByIdController"),
  ICreateCategoryController: Symbol.for("ICreateCategoryController"),
  IDeleteCategoryController: Symbol.for("IDeleteCategoryController"),
};

export type DI_RETURN_TYPES = {
  // Repositories
  IUserRepository: IUserRepository;
  ICategoryRepository: ICategoryRepository;

  // Use Cases
  IGetAllUsersUseCase: IGetAllUsersUseCase;
  IGetUserByIdUseCase: IGetUserByIdUseCase;

  IGetAllCategoriesUseCase: IGetAllCategoriesUseCase;
  IGetCategoryByIdUseCase: IGetCategoryByIdUseCase;
  ICreateCategoryUseCase: ICreateCategoryUseCase;
  IDeleteCategoryUseCase: IDeleteCategoryUseCase;

  // Controllers
  IGetAllUsersController: IGetAllUsersController;
  IGetUserByIdController: IGetUserByIdController;

  IGetAllCategoriesController: IGetAllCategoriesController;
  IGetCategoryByIdController: IGetCategoryByIdController;
  ICreateCategoryController: ICreateCategoryController;
  IDeleteCategoryController: IDeleteCategoryController;
};

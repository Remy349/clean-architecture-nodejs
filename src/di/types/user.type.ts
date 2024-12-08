import { IUserRepository } from "@/application/repositories/user.repository.interface";
import { IGetAllUsersUseCase } from "@/application/use-cases/user/get-all-users.use-case";
import { IGetUserByIdUseCase } from "@/application/use-cases/user/get-user-by-id.use-case";
import { IGetAllUsersController } from "@/interface-adapters/controllers/user/get-all-users.controller";
import { IGetUserByIdController } from "@/interface-adapters/controllers/user/get-user-by-id.controller";

export const DI_USER_SYMBOLS = {
  // REPOSITORY
  IUserRepository: Symbol.for("IUserRepository"),
  // USE CASES
  IGetAllUsersUseCase: Symbol.for("IGetAllUsersUseCase"),
  IGetUserByIdUseCase: Symbol.for("IGetUserByIdUseCase"),
  // CONTROLLERS
  IGetAllUsersController: Symbol.for("IGetAllUsersController"),
  IGetUserByIdController: Symbol.for("IGetUserByIdController"),
};

export type DI_USER_RETURN_TYPES = {
  // REPOSITORY
  IUserRepository: IUserRepository;
  // USE CASES
  IGetAllUsersUseCase: IGetAllUsersUseCase;
  IGetUserByIdUseCase: IGetUserByIdUseCase;
  // CONTROLLERS
  IGetAllUsersController: IGetAllUsersController;
  IGetUserByIdController: IGetUserByIdController;
};

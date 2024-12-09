import { createModule } from "@evyweb/ioctopus";
import { DI_SYMBOLS } from "../types";
import { UserRepository } from "@/infrastructure/repositories/user.repository";
import { getAllUsersUseCase } from "@/application/use-cases/user/get-all-users.use-case";
import { getAllUsersController } from "@/interface-adapters/controllers/user/get-all-users.controller";
import { getUserByIdUseCase } from "@/application/use-cases/user/get-user-by-id.use-case";
import { getUserByIdController } from "@/interface-adapters/controllers/user/get-user-by-id.controller";
import { deleteUserUseCase } from "@/application/use-cases/user/delete-user.use-case";
import { deleteUserController } from "@/interface-adapters/controllers/user/delete-user.controller";

export const createUserModule = () => {
  const userModule = createModule();

  // REPOSITORY
  userModule.bind(DI_SYMBOLS.users.IUserRepository).toClass(UserRepository);

  // USE CASES
  userModule
    .bind(DI_SYMBOLS.users.IGetAllUsersUseCase)
    .toHigherOrderFunction(getAllUsersUseCase, [
      DI_SYMBOLS.users.IUserRepository,
    ]);
  userModule
    .bind(DI_SYMBOLS.users.IGetUserByIdUseCase)
    .toHigherOrderFunction(getUserByIdUseCase, [
      DI_SYMBOLS.users.IUserRepository,
    ]);
  userModule
    .bind(DI_SYMBOLS.users.IDeleteUserUseCase)
    .toHigherOrderFunction(deleteUserUseCase, [
      DI_SYMBOLS.users.IUserRepository,
    ]);

  // CONTROLLERS
  userModule
    .bind(DI_SYMBOLS.users.IGetAllUsersController)
    .toHigherOrderFunction(getAllUsersController, [
      DI_SYMBOLS.users.IGetAllUsersUseCase,
    ]);
  userModule
    .bind(DI_SYMBOLS.users.IGetUserByIdController)
    .toHigherOrderFunction(getUserByIdController, [
      DI_SYMBOLS.users.IGetUserByIdUseCase,
    ]);
  userModule
    .bind(DI_SYMBOLS.users.IDeleteUserController)
    .toHigherOrderFunction(deleteUserController, [
      DI_SYMBOLS.users.IDeleteUserUseCase,
    ]);

  return userModule;
};

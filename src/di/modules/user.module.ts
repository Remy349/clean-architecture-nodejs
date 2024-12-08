import { createModule } from "@evyweb/ioctopus";
import { DI_SYMBOLS } from "../types";
import { UserRepository } from "@/infrastructure/repositories/user.repository";
import { getAllUsersUseCase } from "@/application/use-cases/user/get-all-users.use-case";
import { getAllUsersController } from "@/interface-adapters/controllers/user/get-all-users.controller";
import { getUserByIdUseCase } from "@/application/use-cases/user/get-user-by-id.use-case";
import { getUserByIdController } from "@/interface-adapters/controllers/user/get-user-by-id.controller";

export const createUserModule = () => {
  const userModule = createModule();

  // Repository
  userModule.bind(DI_SYMBOLS.users.IUserRepository).toClass(UserRepository);

  // Use cases
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

  // Controllers
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

  return userModule;
};

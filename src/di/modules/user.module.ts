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
  userModule.bind(DI_SYMBOLS.IUserRepository).toClass(UserRepository);

  // Use cases
  userModule
    .bind(DI_SYMBOLS.IGetAllUsersUseCase)
    .toHigherOrderFunction(getAllUsersUseCase, [DI_SYMBOLS.IUserRepository]);
  userModule
    .bind(DI_SYMBOLS.IGetUserByIdUseCase)
    .toHigherOrderFunction(getUserByIdUseCase, [DI_SYMBOLS.IUserRepository]);

  // Controllers
  userModule
    .bind(DI_SYMBOLS.IGetAllUsersController)
    .toHigherOrderFunction(getAllUsersController, [
      DI_SYMBOLS.IGetAllUsersUseCase,
    ]);
  userModule
    .bind(DI_SYMBOLS.IGetUserByIdController)
    .toHigherOrderFunction(getUserByIdController, [
      DI_SYMBOLS.IGetUserByIdUseCase,
    ]);

  return userModule;
};

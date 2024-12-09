import { createModule } from "@evyweb/ioctopus";
import { DI_SYMBOLS } from "../types";
import { signUpUseCase } from "@/application/use-cases/auth/sign-up.use-case";
import { signUpController } from "@/interface-adapters/controllers/auth/sign-up.controller";

export const createAuthModule = () => {
  const authModule = createModule();

  // USE CASES
  authModule
    .bind(DI_SYMBOLS.auth.ISignUpUseCase)
    .toHigherOrderFunction(signUpUseCase, [DI_SYMBOLS.users.IUserRepository]);

  // CONTROLLERS
  authModule
    .bind(DI_SYMBOLS.auth.ISignUpController)
    .toHigherOrderFunction(signUpController, [DI_SYMBOLS.auth.ISignUpUseCase]);

  return authModule;
};

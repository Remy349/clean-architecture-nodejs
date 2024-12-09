import { ISignUpUseCase } from "@/application/use-cases/auth/sign-up.use-case";
import { ISignUpController } from "@/interface-adapters/controllers/auth/sign-up.controller";

export const DI_AUTH_SYMBOLS = {
  // USE CASES
  ISignUpUseCase: Symbol.for("ISignUpUseCase"),
  // CONTROLLERS
  ISignUpController: Symbol.for("ISignUpController"),
};

export type DI_AUTH_RETURN_TYPES = {
  // USE CASES
  ISignUpUseCase: ISignUpUseCase;
  // CONTROLLERS
  ISignUpController: ISignUpController;
};

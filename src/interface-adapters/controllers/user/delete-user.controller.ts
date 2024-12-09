import { IDeleteUserUseCase } from "@/application/use-cases/user/delete-user.use-case";

export type IDeleteUserController = ReturnType<typeof deleteUserController>;

export const deleteUserController =
  (deleteUserUseCase: IDeleteUserUseCase) =>
  async (userId: number): Promise<void> => {
    await deleteUserUseCase(userId);
  };

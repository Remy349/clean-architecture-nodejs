import { IGetUserByIdUseCase } from "@/application/use-cases/user/get-user-by-id.use-case";
import { User } from "@/entities/models/user.model";

const presenter = (user: User | null) => {
  return user
    ? {
        id: user.id,
        username: user.username,
        role: user.role,
        createdAt: user.createdAt,
      }
    : null;
};

export type IGetUserByIdController = ReturnType<typeof getUserByIdController>;

export const getUserByIdController =
  (getUserByIdUseCase: IGetUserByIdUseCase) =>
  async (userId: number): Promise<ReturnType<typeof presenter>> => {
    const user = await getUserByIdUseCase(userId);

    return presenter(user);
  };

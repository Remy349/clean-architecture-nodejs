import { IGetAllUsersUseCase } from "@/application/use-cases/user/get-all-users.use-case";
import { User } from "@/entities/models/user.model";

const presenter = (users: User[]) => {
  return users.map((user) => ({
    id: user.id,
    username: user.username,
    role: user.role,
    createdAt: user.createdAt,
  }));
};

export type IGetAllUsersController = ReturnType<typeof getAllUsersController>;

export const getAllUsersController =
  (getAllUsersUseCase: IGetAllUsersUseCase) =>
  async (): Promise<ReturnType<typeof presenter>> => {
    const users = await getAllUsersUseCase();

    return presenter(users);
  };

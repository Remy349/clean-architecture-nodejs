import { IUserRepository } from "@/application/repositories/user.repository.interface";
import { User } from "@/entities/models/user.model";

export type IGetUserByIdUseCase = ReturnType<typeof getUserByIdUseCase>;

export const getUserByIdUseCase =
  (userRepository: IUserRepository) =>
  async (userId: number): Promise<User | null> => {
    return await userRepository.getById(userId);
  };

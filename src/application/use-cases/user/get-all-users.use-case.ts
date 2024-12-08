import { IUserRepository } from "@/application/repositories/user.repository.interface";
import { User } from "@/entities/models/user.model";

export type IGetAllUsersUseCase = ReturnType<typeof getAllUsersUseCase>;

export const getAllUsersUseCase =
  (userRepository: IUserRepository) => async (): Promise<User[]> => {
    return await userRepository.getAll();
  };

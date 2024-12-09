import { IUserRepository } from "@/application/repositories/user.repository.interface";
import { DBNotFoundError } from "@/entities/errors/database.error";

export type IDeleteUserUseCase = ReturnType<typeof deleteUserUseCase>;

export const deleteUserUseCase =
  (userRepository: IUserRepository) =>
  async (userId: number): Promise<void> => {
    const user = await userRepository.getById(userId);

    if (!user) {
      throw new DBNotFoundError("User not found");
    }

    return await userRepository.delete(userId);
  };

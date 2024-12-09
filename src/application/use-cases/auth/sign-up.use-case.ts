import { IUserRepository } from "@/application/repositories/user.repository.interface";
import { DBConflictError } from "@/entities/errors/database.error";
import { CreateUser, User } from "@/entities/models/user.model";

export type ISignUpUseCase = ReturnType<typeof signUpUseCase>;

export const signUpUseCase =
  (userRepository: IUserRepository) =>
  async (data: Pick<CreateUser, "username" | "password">): Promise<User> => {
    const user = await userRepository.getByUsername(data.username);

    if (user) {
      throw new DBConflictError("User already created");
    }

    return await userRepository.create({
      username: data.username,
      password: data.password,
      role: "USER",
    });
  };

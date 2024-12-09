import { ISignUpUseCase } from "@/application/use-cases/auth/sign-up.use-case";
import { InputParseError } from "@/entities/errors/parse.error";
import { User } from "@/entities/models/user.model";
import { z } from "zod";

const presenter = (user: User) => {
  return {
    id: user.id,
    username: user.username,
    role: user.role,
    createdAt: user.createdAt,
  };
};

const inputSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export type ISignUpController = ReturnType<typeof signUpController>;

export const signUpController =
  (signUpUseCase: ISignUpUseCase) =>
  async (
    input: z.infer<typeof inputSchema>,
  ): Promise<ReturnType<typeof presenter>> => {
    const { data, error: inputParseError } = inputSchema.safeParse(input);

    if (inputParseError) {
      throw new InputParseError("Invalid data", { cause: inputParseError });
    }

    const user = await signUpUseCase(data);

    return presenter(user);
  };

import { ICreateCategoryUseCase } from "@/application/use-cases/category/create-category.use-case";
import { InputParseError } from "@/entities/errors/parse.error";
import { Category } from "@/entities/models/category.model";
import { z } from "zod";

const presenter = (category: Category) => {
  return {
    id: category.id,
    name: category.name,
    createdAt: category.createdAt,
  };
};

const inputSchema = z.object({
  name: z.string().min(1, "Name is required"),
});

export type ICreateCategoryController = ReturnType<
  typeof createCategoryController
>;

export const createCategoryController =
  (createCategoryUseCase: ICreateCategoryUseCase) =>
  async (
    input: z.infer<typeof inputSchema>,
  ): Promise<ReturnType<typeof presenter>> => {
    const { data, error: inputParseError } = inputSchema.safeParse(input);

    if (inputParseError) {
      throw new InputParseError("Invalid data", { cause: inputParseError });
    }

    const category = await createCategoryUseCase(data);

    return presenter(category);
  };

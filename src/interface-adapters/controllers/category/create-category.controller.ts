import { CreateCategoryUseCase } from "@/application/use-cases/category/create-category.use-case";
import { Category, CreateCategory } from "@/entities/models/category.model";
import { z } from "zod";

const presenter = (category: Category) => {
  return {
    id: category.id,
    name: category.name,
    createdAt: category.createdAt,
  };
};

const inputSchema = z.object({
  name: z.string().min(1),
});

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async run(input: CreateCategory): Promise<ReturnType<typeof presenter>> {
    const { data, error: inputParseError } = inputSchema.safeParse(input);

    if (inputParseError) {
      throw new Error("Invalid data");
    }

    const category = await this.createCategoryUseCase.run(data);

    return presenter(category);
  }
}

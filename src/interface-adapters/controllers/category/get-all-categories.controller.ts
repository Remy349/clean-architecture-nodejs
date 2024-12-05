import { GetAllCategoriesUseCase } from "@/application/use-cases/category/get-all-categories.use-case";
import { Category } from "@/entities/models/category.model";

const presenter = (categories: Category[]) => {
  return categories.map((category) => ({
    id: category.id,
    name: category.name,
    createdAt: category.createdAt,
  }));
};

export class GetAllCategoriesController {
  constructor(private getAllCategoriesUseCase: GetAllCategoriesUseCase) {}

  async run(): Promise<ReturnType<typeof presenter>> {
    const categories = await this.getAllCategoriesUseCase.run();

    return presenter(categories);
  }
}

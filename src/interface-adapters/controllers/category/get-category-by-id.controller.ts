import { IGetCategoryByIdUseCase } from "@/application/use-cases/category/get-category-by-id.use-case";
import { Category } from "@/entities/models/category.model";

const presenter = (category: Category | null) => {
  return category
    ? {
        id: category.id,
        name: category.name,
        createdAt: category.createdAt,
      }
    : null;
};

export type IGetCategoryByIdController = ReturnType<
  typeof getCategoryByIdController
>;

export const getCategoryByIdController =
  (getCategoryByIdUseCase: IGetCategoryByIdUseCase) =>
  async (categoryId: number): Promise<ReturnType<typeof presenter>> => {
    const category = await getCategoryByIdUseCase(categoryId);

    return presenter(category);
  };

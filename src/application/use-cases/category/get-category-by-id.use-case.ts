import { ICategoryRepository } from "@/application/repositories/category.repository.interface";
import { Category } from "@/entities/models/category.model";

export type IGetCategoryByIdUseCase = ReturnType<typeof getCategoryByIdUseCase>;

export const getCategoryByIdUseCase =
  (categoryRepository: ICategoryRepository) =>
  async (categoryId: number): Promise<Category | null> => {
    return await categoryRepository.getById(categoryId);
  };

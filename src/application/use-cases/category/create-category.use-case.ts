import { ICategoryRepository } from "@/application/repositories/category.repository.interface";
import { Category, CreateCategory } from "@/entities/models/category.model";

export type ICreateCategoryUseCase = ReturnType<typeof createCategoryUseCase>;

export const createCategoryUseCase =
  (categoryRepository: ICategoryRepository) =>
  async (data: CreateCategory): Promise<Category> => {
    return await categoryRepository.create(data);
  };

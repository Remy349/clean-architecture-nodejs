import { ICategoryRepository } from "@/application/repositories/category.repository.interface";
import { Category } from "@/entities/models/category.model";

export const getAllCategoriesUseCase =
  (categoryRepository: ICategoryRepository) =>
  async (): Promise<Category[]> => {
    return await categoryRepository.getAll();
  };

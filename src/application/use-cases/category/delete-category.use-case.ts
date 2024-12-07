import { ICategoryRepository } from "@/application/repositories/category.repository.interface";
import { DBNotFoundError } from "@/entities/errors/database.error";

export type IDeleteCategoryUseCase = ReturnType<typeof deleteCategoryUseCase>;

export const deleteCategoryUseCase =
  (categoryRepository: ICategoryRepository) =>
  async (categoryId: number): Promise<void> => {
    const category = await categoryRepository.getById(categoryId);

    if (!category) {
      throw new DBNotFoundError("Category not found");
    }

    return await categoryRepository.delete(categoryId);
  };

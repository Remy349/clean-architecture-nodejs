import { ICategoryRepository } from "@/application/repositories/category.repository.interface";

export type IDeleteCategoryUseCase = ReturnType<typeof deleteCategoryUseCase>;

export const deleteCategoryUseCase =
  (categoryRepository: ICategoryRepository) =>
  async (categoryId: number): Promise<void> => {
    return await categoryRepository.delete(categoryId);
  };

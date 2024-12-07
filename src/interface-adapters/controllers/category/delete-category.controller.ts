import { IDeleteCategoryUseCase } from "@/application/use-cases/category/delete-category.use-case";

export type IDeleteCategoryController = ReturnType<
  typeof deleteCategoryController
>;

export const deleteCategoryController =
  (deleteCategoryUseCase: IDeleteCategoryUseCase) =>
  async (categoryId: number): Promise<void> => {
    await deleteCategoryUseCase(categoryId);
  };

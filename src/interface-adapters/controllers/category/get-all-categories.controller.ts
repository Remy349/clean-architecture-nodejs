import { IGetAllCategoriesUseCase } from "@/application/use-cases/category/get-all-categories.use-case";
import { Category } from "@/entities/models/category.model";

const presenter = (categories: Category[]) => {
  return categories.map((category) => ({
    id: category.id,
    name: category.name,
    createdAt: category.createdAt,
  }));
};

export type IGetAllCategoriesController = ReturnType<
  typeof getAllCategoriesController
>;

export const getAllCategoriesController =
  (getAllCategoriesUseCase: IGetAllCategoriesUseCase) =>
  async (): Promise<ReturnType<typeof presenter>> => {
    const categories = await getAllCategoriesUseCase();

    return presenter(categories);
  };

import { Category, CreateCategory } from "@/entities/models/category.model";

export interface ICategoryRepository {
  create(data: CreateCategory): Promise<Category>;
}

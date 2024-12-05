import { Category, CreateCategory } from "@/entities/models/category.model";

export interface ICategoryRepository {
  getAll(): Promise<Category[]>;
  create(data: CreateCategory): Promise<Category>;
}

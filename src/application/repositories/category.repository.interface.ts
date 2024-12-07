import { Category, CreateCategory } from "@/entities/models/category.model";

export interface ICategoryRepository {
  getAll(): Promise<Category[]>;
  getById(categoryId: number): Promise<Category | null>;
  create(data: CreateCategory): Promise<Category>;
  delete(categoryId: number): Promise<void>;
}

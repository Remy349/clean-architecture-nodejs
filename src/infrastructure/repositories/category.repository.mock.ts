import { ICategoryRepository } from "@/application/repositories/category.repository.interface";
import { Category, CreateCategory } from "@/entities/models/category.model";

export class CategoryRepositoryMock implements ICategoryRepository {
  private _categories: Category[];

  constructor() {
    this._categories = [];
  }

  async getAll(): Promise<Category[]> {
    return this._categories;
  }

  async getById(categoryId: number): Promise<Category | null> {
    return (
      this._categories.find((category) => category.id === categoryId) || null
    );
  }

  async create(data: CreateCategory): Promise<Category> {
    const newCategory: Category = {
      id: this._categories.length + 1,
      ...data,
      createdAt: new Date(),
    };

    this._categories.push(newCategory);

    return newCategory;
  }

  async delete(categoryId: number): Promise<void> {
    const index = this._categories.findIndex(
      (category) => category.id === categoryId,
    );

    if (index > -1) {
      delete this._categories[index];

      this._categories = this._categories.filter(Boolean);
    }
  }
}

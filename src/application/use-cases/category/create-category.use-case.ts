import { ICategoryRepository } from "@/application/repositories/category.repository.interface";
import { Category, CreateCategory } from "@/entities/models/category.model";

export class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async run(data: CreateCategory): Promise<Category> {
    return await this.categoryRepository.create(data);
  }
}

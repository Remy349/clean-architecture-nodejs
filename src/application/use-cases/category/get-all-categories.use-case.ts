import { ICategoryRepository } from "@/application/repositories/category.repository.interface";
import { Category } from "@/entities/models/category.model";

export class GetAllCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async run(): Promise<Category[]> {
    return await this.categoryRepository.getAll();
  }
}

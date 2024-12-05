import { ICategoryRepository } from "@/application/repositories/category.repository.interface";
import PrismaSingleton from "@/db/prisma";
import { CreateCategory, Category } from "@/entities/models/category.model";
import { PrismaClient } from "@prisma/client";

export class CategoryRepository implements ICategoryRepository {
  private db: PrismaClient;

  constructor() {
    this.db = PrismaSingleton.getInstance();
  }

  async create(data: CreateCategory): Promise<Category> {
    try {
      const categoryByName = await this.db.category.findFirst({
        where: {
          name: data.name,
        },
      });

      if (categoryByName) {
        throw new Error("Category already created");
      }

      const newCategory = await this.db.category.create({
        data,
      });

      return newCategory;
    } catch (err) {
      console.error(err);
      throw new Error("Internal server error while creating category");
    }
  }
}

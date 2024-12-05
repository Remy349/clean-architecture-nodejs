import { ICategoryRepository } from "@/application/repositories/category.repository.interface";
import PrismaSingleton from "@/db/prisma";
import { DBConflictError } from "@/entities/errors/database.error";
import { CreateCategory, Category } from "@/entities/models/category.model";
import { PrismaClient } from "@prisma/client";

export class CategoryRepository implements ICategoryRepository {
  private db: PrismaClient;

  constructor() {
    this.db = PrismaSingleton.getInstance();
  }

  async getAll(): Promise<Category[]> {
    try {
      const categories = await this.db.category.findMany();

      return categories;
    } catch (err) {
      console.error("====> ERROR FROM REPOSITORY", err);
      throw err;
    }
  }

  async create(data: CreateCategory): Promise<Category> {
    try {
      const categoryByName = await this.db.category.findFirst({
        where: {
          name: data.name,
        },
      });

      if (categoryByName) {
        throw new DBConflictError("Category already created");
      }

      const newCategory = await this.db.category.create({
        data,
      });

      return newCategory;
    } catch (err) {
      console.error("====> ERROR FROM REPOSITORY", err);
      throw err;
    }
  }
}

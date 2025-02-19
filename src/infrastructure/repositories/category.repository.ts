import { ICategoryRepository } from "@/application/repositories/category.repository.interface";
import PrismaSingleton from "@/db/prisma";
import { ApiError } from "@/entities/errors/api.error";
import {
  DBConflictError,
  DBInternalServerError,
} from "@/entities/errors/database.error";
import { CreateCategory, Category } from "@/entities/models/category.model";
import { PrismaClient } from "@prisma/client";

export class CategoryRepository implements ICategoryRepository {
  private _db: PrismaClient;

  constructor() {
    this._db = PrismaSingleton.getInstance();
  }

  async getAll(): Promise<Category[]> {
    try {
      const categories = await this._db.category.findMany();

      return categories;
    } catch (err) {
      console.error("===> ERROR FROM REPOSITORY IMPL - ", err);
      throw new DBInternalServerError(
        "Internal server error while fetching categories",
      );
    }
  }

  async getById(categoryId: number): Promise<Category | null> {
    try {
      const category = await this._db.category.findFirst({
        where: { id: categoryId },
      });

      return category;
    } catch (err) {
      console.error("===> ERROR FROM REPOSITORY IMPL - ", err);
      throw new DBInternalServerError(
        "Internal server error while fetching category",
      );
    }
  }

  async create(data: CreateCategory): Promise<Category> {
    try {
      const categoryByName = await this._db.category.findFirst({
        where: {
          name: data.name,
        },
      });

      if (categoryByName) {
        throw new DBConflictError("Category already created");
      }

      const newCategory = await this._db.category.create({
        data,
      });

      return newCategory;
    } catch (err) {
      console.error("===> ERROR FROM REPOSITORY IMPL - ", err);

      if (err instanceof ApiError) {
        throw err;
      }

      throw new DBInternalServerError(
        "Internal server error while creating category",
      );
    }
  }

  async delete(categoryId: number): Promise<void> {
    try {
      await this._db.category.delete({
        where: { id: categoryId },
      });
    } catch (err) {
      console.error("===> ERROR FROM REPOSITORY IMPL - ", err);
      throw new DBInternalServerError(
        "Internal server error while deleting category",
      );
    }
  }
}

import { IUserRepository } from "@/application/repositories/user.repository.interface";
import PrismaSingleton from "@/db/prisma";
import { DBInternalServerError } from "@/entities/errors/database.error";
import { CreateUser, User } from "@/entities/models/user.model";
import { PrismaClient } from "@prisma/client";

export class UserRepository implements IUserRepository {
  private db: PrismaClient;

  constructor() {
    this.db = PrismaSingleton.getInstance();
  }

  async getAll(): Promise<User[]> {
    try {
      return await this.db.user.findMany();
    } catch (err) {
      console.error("===> ERROR FROM REPOSITORY IMPL - ", err);
      throw new DBInternalServerError(
        "Interal server error while fetching users",
      );
    }
  }

  async getById(userId: number): Promise<User | null> {
    try {
      const user = await this.db.user.findFirst({
        where: { id: userId },
      });

      return user;
    } catch (err) {
      console.error("===> ERROR FROM REPOSITORY IMPL - ", err);
      throw new DBInternalServerError(
        "Interal server error while fetching user",
      );
    }
  }

  async getByUsername(username: string): Promise<User | null> {
    try {
      const user = await this.db.user.findFirst({
        where: { username },
      });

      return user;
    } catch (err) {
      console.error("===> ERROR FROM REPOSITORY IMPL - ", err);
      throw new DBInternalServerError(
        "Interal server error while fetching user",
      );
    }
  }

  async create(data: CreateUser): Promise<User> {
    throw new Error("Implement Logic");
  }

  async delete(userId: number): Promise<void> {
    throw new Error("Implement Logic");
  }
}

import { CreateUser, User } from "@/entities/models/user.model";

export interface IUserRepository {
  getAll(): Promise<User[]>;
  getById(userId: number): Promise<User | null>;
  getByUsername(username: string): Promise<User | null>;
  create(data: CreateUser): Promise<User>;
  delete(userId: number): Promise<void>;
}

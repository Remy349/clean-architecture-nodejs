export type User = {
  id: number;
  username: string;
  password: string;
  role: string;
  createdAt: Date;
};

export type CreateUser = Omit<User, "id" | "createdAt">;

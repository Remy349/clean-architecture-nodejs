export type Category = {
  id: number;
  name: string;
  createdAt: Date;
};

export type CreateCategory = Pick<Category, "name">;

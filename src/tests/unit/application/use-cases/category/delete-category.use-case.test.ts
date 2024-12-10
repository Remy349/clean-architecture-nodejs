import { getInjection } from "@/di/container";
import { describe, expect, it } from "vitest";

const createCategoryUseCase = getInjection(
  "categories",
  "ICreateCategoryUseCase",
);
const getAllCategoriesUseCase = getInjection(
  "categories",
  "IGetAllCategoriesUseCase",
);
const deleteCategoryUseCase = getInjection(
  "categories",
  "IDeleteCategoryUseCase",
);

describe("===> Delete category - Use case", () => {
  it("Should delete a category using the id", async () => {
    await createCategoryUseCase({ name: "category1" });

    await expect(getAllCategoriesUseCase()).resolves.toHaveLength(1);

    await deleteCategoryUseCase(1);

    await expect(getAllCategoriesUseCase()).resolves.toHaveLength(0);
  });
});

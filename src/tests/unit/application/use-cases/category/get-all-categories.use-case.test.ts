import { describe, expect, it } from "vitest";
import { getInjection } from "@/di/container";

const getAllCategoriesUseCase = getInjection(
  "categories",
  "IGetAllCategoriesUseCase",
);
const createCategoryUseCase = getInjection(
  "categories",
  "ICreateCategoryUseCase",
);

describe("===> Get categories - Use case", () => {
  it("Should return all categories", async () => {
    await expect(getAllCategoriesUseCase()).resolves.toHaveLength(0);

    await createCategoryUseCase({ name: "category1" });
    await createCategoryUseCase({ name: "category2" });
    await createCategoryUseCase({ name: "category3" });

    await expect(getAllCategoriesUseCase()).resolves.toHaveLength(3);
  });
});

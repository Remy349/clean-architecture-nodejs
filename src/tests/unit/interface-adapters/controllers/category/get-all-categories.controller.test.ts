import { getInjection } from "@/di/container";
import { describe, expect, it } from "vitest";

const createCategoryUseCase = getInjection(
  "categories",
  "ICreateCategoryUseCase",
);
const getAllCategoriesController = getInjection(
  "categories",
  "IGetAllCategoriesController",
);

describe("===> Get categories - Controller", () => {
  it("Should return all categories", async () => {
    await expect(getAllCategoriesController()).resolves.toHaveLength(0);

    await createCategoryUseCase({ name: "category1" });
    await createCategoryUseCase({ name: "category2" });
    await createCategoryUseCase({ name: "category3" });

    await expect(getAllCategoriesController()).resolves.toHaveLength(3);
  });
});

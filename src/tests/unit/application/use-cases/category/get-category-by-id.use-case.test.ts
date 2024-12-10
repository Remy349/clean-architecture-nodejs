import { getInjection } from "@/di/container";
import { describe, expect, it } from "vitest";

const getCategoryByIdUseCase = getInjection(
  "categories",
  "IGetCategoryByIdUseCase",
);
const createCategoryUseCase = getInjection(
  "categories",
  "ICreateCategoryUseCase",
);

describe("===> Get category by id - Use case", () => {
  it("Should return a category using the id", async () => {
    await expect(getCategoryByIdUseCase(1)).resolves.toBeNull();

    await createCategoryUseCase({ name: "category1" });

    await expect(getCategoryByIdUseCase(1)).resolves.toHaveProperty("id");
    await expect(getCategoryByIdUseCase(1)).resolves.toHaveProperty(
      "createdAt",
    );
  });
});

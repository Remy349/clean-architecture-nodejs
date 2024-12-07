import { createContainer } from "@evyweb/ioctopus";
import { createCategoryModule } from "./modules/category.module";
import { DI_RETURN_TYPES, DI_SYMBOLS } from "./types";

const container = createContainer();

container.load(Symbol("CategoryModule"), createCategoryModule());

export function getInjection<K extends keyof typeof DI_SYMBOLS>(
  symbol: K,
): DI_RETURN_TYPES[K] {
  return container.get(DI_SYMBOLS[symbol]);
}

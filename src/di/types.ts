import { DI_USER_RETURN_TYPES, DI_USER_SYMBOLS } from "./types/user.type";
import {
  DI_CATEGORY_RETURN_TYPES,
  DI_CATEGORY_SYMBOLS,
} from "./types/category.type";
import { DI_AUTH_RETURN_TYPES, DI_AUTH_SYMBOLS } from "./types/auth.type";

export const DI_SYMBOLS = {
  users: DI_USER_SYMBOLS,
  categories: DI_CATEGORY_SYMBOLS,
  auth: DI_AUTH_SYMBOLS,
};

export type DI_RETURN_TYPES = {
  users: DI_USER_RETURN_TYPES;
  categories: DI_CATEGORY_RETURN_TYPES;
  auth: DI_AUTH_RETURN_TYPES;
};

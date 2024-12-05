import { Router } from "express";
import { createCategory, getAllCategories } from "./category.route";

export const categoryRouter = Router();

categoryRouter.get("/", getAllCategories);
categoryRouter.post("/", createCategory);

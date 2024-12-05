import { Router } from "express";
import { CategoryRoute } from "./category.route";

export const categoryRouter = Router();

categoryRouter.post("/", CategoryRoute.create);

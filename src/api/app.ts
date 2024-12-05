import express from "express";
import morgan from "morgan";
import { categoryRouter } from "./routes/category/routes";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/categories", categoryRouter);

export default app;

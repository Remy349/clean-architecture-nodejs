import express from "express";
import morgan from "morgan";
import { categoryRouter } from "./routes/category/routes";
import { errorHandler } from "./middleware/error-handler";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/categories", categoryRouter);

app.use(errorHandler);

export default app;

import express from "express";
import morgan from "morgan";

import { errorHandler } from "./middleware/error-handler";

import { categoryRouter } from "./routes/category/routes";
import { userRouter } from "./routes/user/routes";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/categories", categoryRouter);

app.use(errorHandler);

export default app;

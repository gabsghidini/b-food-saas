import "express-async-errors";
import "reflect-metadata";
import express from "express";
import { userRouter, loginRouter, plateRoutes } from "./routes";
import errorHandler from "./errors";

const app = express();
app.use(express.json());
app.use("/users", userRouter);
app.use("/login", loginRouter);
app.use("/plates", plateRoutes);
app.use(errorHandler);

export default app;

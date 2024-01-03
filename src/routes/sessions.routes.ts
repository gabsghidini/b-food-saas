import { Router } from "express";
import { loginUserController } from "../controllers";
import {
	validateSchemaMiddleware,
	verifyIfLoginExistsMiddleware,
} from "../middlewares";
import { loginUserSchema } from "../schemas";

const sessionRouter = Router();

sessionRouter.post(
	"",
	validateSchemaMiddleware(loginUserSchema),
	verifyIfLoginExistsMiddleware,
	loginUserController
);

export default sessionRouter;

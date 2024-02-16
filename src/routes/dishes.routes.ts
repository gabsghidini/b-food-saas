import { Router } from "express";
import { createDishesController, getAllDishesController } from "../controllers";
import {
	validateSchemaMiddleware,
	verifyTokenMiddleware,
	verifyForbiddenFieldsMiddleware,
	verifyIfDishAlreadyExists,
} from "../middlewares";
import { createDishSchema } from "../schemas";

const dishesRoutes = Router();

dishesRoutes.get("", verifyTokenMiddleware, getAllDishesController);

dishesRoutes.post(
	"",
	validateSchemaMiddleware(createDishSchema),
	verifyIfDishAlreadyExists,
	createDishesController
);

dishesRoutes.delete("/:id", verifyTokenMiddleware, () =>
	console.log("proc Delete")
);

dishesRoutes.patch(
	"/:id",
	verifyTokenMiddleware,
	verifyForbiddenFieldsMiddleware,
	() => console.log("proc Patch")
);

export default dishesRoutes;

import Router from "express";
import {
	createIngredientController,
	getAllIngredientsController,
} from "../controllers";
import { validateSchemaMiddleware } from "../middlewares";
import { createIngredientSchema } from "../schemas";

const ingredientsRoutes = Router();

ingredientsRoutes.post(
	"",
	validateSchemaMiddleware(createIngredientSchema),
	createIngredientController
);

ingredientsRoutes.get("", getAllIngredientsController);

export default ingredientsRoutes;

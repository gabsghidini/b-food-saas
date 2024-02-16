import { createIngredientsServices } from "../../services";
import { Request, Response } from "express";
import { Ingredient } from "../../entities/ingredient";

const createIngredientController = async (req: Request, res: Response) => {
	const ingredient: Ingredient = await createIngredientsServices(req.body);

	return res.status(201).json(ingredient);
};

export default createIngredientController;

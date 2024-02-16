import { Request, Response } from "express";
import { getAllIngredientsServices } from "../../services";
import * as i from "../../interfaces/ingredients";

const getAllIngredientsController = async (req: Request, res: Response) => {
	const ingredients: i.Ingredient[] = await getAllIngredientsServices();

	return res.status(200).json(ingredients);
};

export default getAllIngredientsController;

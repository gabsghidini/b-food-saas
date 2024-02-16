import { createDishesServices } from "../../services";
import { Request, Response } from "express";
import * as i from "../../interfaces/dishes";

const createDishesController = async (req: Request, res: Response) => {
	const dish: i.Dish = await createDishesServices(req.body);

	return res.status(201).json(dish);
};

export default createDishesController;

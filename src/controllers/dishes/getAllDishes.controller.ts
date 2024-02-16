import { getAllDishesServices } from "../../services";
import { Request, Response } from "express";

const getAllDishesController = async (req: Request, res: Response) => {
	const dishes = await getAllDishesServices();
	return res.status(200).json(dishes);
};

export default getAllDishesController;

import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { Dish } from "../../entities/dish";
import * as i from "../../interfaces/dishes";
import { AppError } from "../../errors";

const verifyIfDishAlreadyExists = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { name } = req.body;
	const dishRepository = AppDataSource.getRepository(Dish);

	const dishExists = await dishRepository.findOne({
		where: {
			name: name,
		},
	});

	if (dishExists) {
		throw new AppError({ message: "User already exists" }, 409);
	}

	next();
};

export default verifyIfDishAlreadyExists;

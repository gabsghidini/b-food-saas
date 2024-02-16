import AppDataSource from "../../data-source";
import { Dish } from "../../entities/dish";
import * as i from "../../interfaces/dishes";

const createDishesServices = async (payload: i.Dish): Promise<i.Dish> => {
	const { name, price, ingredients } = payload;
	const dishRepository = AppDataSource.getRepository(Dish);

	const dish = dishRepository.create({
		name,
		price,
		ingredients,
	});

	await dishRepository.save(dish);

	return dish;
};

export default createDishesServices;

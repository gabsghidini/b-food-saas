import AppDataSource from "../../data-source";
import { Dish } from "../../entities/dish";
import * as i from "../../interfaces/dishes";

const getAllDishesServices = async (): Promise<i.Dish[]> => {
	const dishRepository = AppDataSource.getRepository(Dish);
	return await dishRepository.find();
};

export default getAllDishesServices;

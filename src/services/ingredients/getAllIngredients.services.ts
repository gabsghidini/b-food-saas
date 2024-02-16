import AppDataSource from "../../data-source";
import { Ingredient } from "../../entities/ingredient";
import * as i from "../../interfaces/ingredients";

const getAllIngredientsServices = async (): Promise<i.Ingredient[]> => {
	const ingredientRepository = AppDataSource.getRepository(Ingredient);
	const ingredients = await ingredientRepository.find();

	return ingredients;
};

export default getAllIngredientsServices;

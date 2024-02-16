import AppDataSource from "../../data-source";
import { Ingredient } from "../../entities/ingredient";
import * as i from "../../interfaces/ingredients";

const createIngredientsServices = async (
	payload: i.Ingredient
): Promise<i.Ingredient> => {
	const { name, price, quantity, measurementUnit, dish } = payload;
	const ingredientRepository = AppDataSource.getRepository(Ingredient);

	const ingredient = ingredientRepository.create({
		name,
		price,
		quantity,
		measurementUnit,
		dish,
	});

	await ingredientRepository.save(ingredient);

	return ingredient;
};

export default createIngredientsServices;

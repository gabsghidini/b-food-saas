import { Ingredient } from "../ingredients";

export interface Dish {
	id: number;
	name: string;
	price: number;
	ingredients: Ingredient[];
}

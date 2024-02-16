import { Dish } from "../dishes";

export interface Ingredient {
	id: number;
	name: string;
	price: number;
	quantity: number;
	measurementUnit: string;
	dish: Dish;
}

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Ingredient } from "./ingredient";

@Entity()
export class Dish {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column("decimal")
	price: number;

	@OneToMany(() => Ingredient, (ingredient) => ingredient.dish, {
		cascade: true,
	})
	ingredients: Ingredient[];
}

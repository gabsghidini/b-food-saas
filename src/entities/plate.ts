import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Ingredient } from "./ingredient";

@Entity()
export class Plate {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@OneToMany(() => Ingredient, (ingredient) => ingredient.plate, {
		cascade: true,
	})
	ingredients: Ingredient[];
}

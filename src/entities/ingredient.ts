import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Dish } from "./dish";

@Entity()
export class Ingredient {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column("decimal", { precision: 10, scale: 2 })
	price: number;

	@Column()
	quantity: number;

	@Column()
	measurementUnit: string;

	@ManyToOne(() => Dish, (dish) => dish.ingredients)
	dish: Dish;
}

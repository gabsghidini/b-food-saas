import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Plate } from "./plate";

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

	@ManyToOne(() => Plate, (plate) => plate.ingredients)
	plate: Plate;
}

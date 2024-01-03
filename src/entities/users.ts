import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BeforeInsert,
	CreateDateColumn,
	UpdateDateColumn,
} from "typeorm";
import { hashSync } from "bcryptjs";

@Entity("users")
export class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	name: string;

	@Column()
	email: string;

	@BeforeInsert()
	hashPassword() {
		this.password = hashSync(this.password, 10);
	}

	@Column()
	password: string;

	@Column()
	isAdm: boolean;

	@Column({
		default: true,
	})
	isActive: boolean;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}

import { MigrationInterface, QueryRunner } from "typeorm";

export class dishPrice1706921298821 implements MigrationInterface {
	name = "dishPrice1706921298821";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`ALTER TABLE "dish" DROP COLUMN "price"`);
		await queryRunner.query(
			`ALTER TABLE "dish" ADD "price" numeric NOT NULL`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`ALTER TABLE "dish" DROP COLUMN "price"`);
		await queryRunner.query(
			`ALTER TABLE "dish" ADD "price" integer NOT NULL`
		);
	}
}

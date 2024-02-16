import { MigrationInterface, QueryRunner } from "typeorm";

export class measurementUnit1706966956902 implements MigrationInterface {
    name = 'measurementUnit1706966956902'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ingredient" ADD "measurementUnit" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ingredient" DROP COLUMN "measurementUnit"`);
    }

}

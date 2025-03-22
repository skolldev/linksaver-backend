import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateLinksTable1709999999999 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "links" (
                "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "url" varchar NOT NULL,
                "title" varchar,
                "description" text,
                "image_url" varchar,
                CONSTRAINT "PK_links" PRIMARY KEY ("uuid")
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "links"`);
  }
}

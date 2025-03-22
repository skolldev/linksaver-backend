import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCreatedAtToLinks1710000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "links"
            ADD COLUMN "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "links"
            DROP COLUMN "created_at"
        `);
  }
}

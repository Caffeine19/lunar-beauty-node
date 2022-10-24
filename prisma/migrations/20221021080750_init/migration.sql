/*
  Warnings:

  - You are about to drop the column `from` on the `edge` table. All the data in the column will be lost.
  - You are about to drop the column `to` on the `edge` table. All the data in the column will be lost.
  - Added the required column `edgeType` to the `Edge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `source` to the `Edge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `target` to the `Edge` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `edge` DROP COLUMN `from`,
    DROP COLUMN `to`,
    ADD COLUMN `edgeType` ENUM('PP', 'PI', 'II') NOT NULL,
    ADD COLUMN `source` VARCHAR(191) NOT NULL,
    ADD COLUMN `target` VARCHAR(191) NOT NULL;

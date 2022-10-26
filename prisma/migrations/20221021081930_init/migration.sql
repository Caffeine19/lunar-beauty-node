/*
  Warnings:

  - You are about to drop the column `routineId` on the `edge` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `edge` DROP FOREIGN KEY `Edge_routineId_fkey`;

-- AlterTable
ALTER TABLE `edge` DROP COLUMN `routineId`;

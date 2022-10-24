/*
  Warnings:

  - Added the required column `expense` to the `RoutineProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `routineproduct` ADD COLUMN `expense` VARCHAR(191) NOT NULL;

/*
  Warnings:

  - You are about to alter the column `mark` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `Product` MODIFY `mark` DOUBLE NOT NULL;

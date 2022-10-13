/*
  Warnings:

  - You are about to drop the column `type` on the `product` table. All the data in the column will be lost.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `type`,
    ADD COLUMN `category` VARCHAR(191) NOT NULL;

/*
  Warnings:

  - You are about to drop the column `rank` on the `comment` table. All the data in the column will be lost.
  - You are about to drop the column `mark` on the `product` table. All the data in the column will be lost.
  - Added the required column `mark` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment` DROP COLUMN `rank`,
    ADD COLUMN `mark` DOUBLE NOT NUL L;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `mark`;

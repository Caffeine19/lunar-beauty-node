/*
  Warnings:

  - You are about to alter the column `shelfTime` on the `StoreProduct` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `StoreProduct` MODIFY `shelfTime` INTEGER NOT NULL;

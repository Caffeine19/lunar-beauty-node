/*
  Warnings:

  - You are about to drop the column `oppenedTime` on the `storeproduct` table. All the data in the column will be lost.
  - Added the required column `openedTime` to the `StoreProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productionTime` to the `StoreProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `storeproduct` DROP COLUMN `oppenedTime`,
    ADD COLUMN `openedTime` DATETIME(3) NOT NULL,
    ADD COLUMN `productionTime` DATETIME(3) NOT NULL,
    MODIFY `shelfTime` VARCHAR(191) NOT NULL;

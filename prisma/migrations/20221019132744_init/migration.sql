/*
  Warnings:

  - You are about to drop the `routineproduct` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `storeproduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `routineproduct` DROP FOREIGN KEY `RoutineProduct_productId_fkey`;

-- DropForeignKey
ALTER TABLE `routineproduct` DROP FOREIGN KEY `RoutineProduct_routineId_fkey`;

-- DropForeignKey
ALTER TABLE `storeproduct` DROP FOREIGN KEY `StoreProduct_productId_fkey`;

-- DropForeignKey
ALTER TABLE `storeproduct` DROP FOREIGN KEY `StoreProduct_storeId_fkey`;

-- DropTable
DROP TABLE `routineproduct`;

-- DropTable
DROP TABLE `storeproduct`;

-- CreateTable
CREATE TABLE `StoreProduct` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `storeId` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,
    `amount` INTEGER NOT NULL,
    `applyingTime` ENUM('ALL', 'DAY', 'Night') NOT NULL DEFAULT 'ALL',
    `expense` VARCHAR(191) NOT NULL,
    `productionTime` DATETIME(3) NOT NULL,
    `shelfTime` INTEGER NOT NULL,
    `openedTime` DATETIME(3) NULL,
    `isRunout` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoutineProduct` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `routineId` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,
    `amount` INTEGER NOT NULL,
    `applyingTime` ENUM('ALL', 'DAY', 'Night') NOT NULL DEFAULT 'ALL',
    `expense` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `StoreProduct` ADD CONSTRAINT `StoreProduct_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StoreProduct` ADD CONSTRAINT `StoreProduct_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoutineProduct` ADD CONSTRAINT `RoutineProduct_routineId_fkey` FOREIGN KEY (`routineId`) REFERENCES `Routine`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoutineProduct` ADD CONSTRAINT `RoutineProduct_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

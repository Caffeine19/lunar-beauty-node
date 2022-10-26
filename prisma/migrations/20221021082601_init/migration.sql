-- AlterTable
ALTER TABLE `edge` ADD COLUMN `routineId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Edge` ADD CONSTRAINT `Edge_routineId_fkey` FOREIGN KEY (`routineId`) REFERENCES `Routine`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

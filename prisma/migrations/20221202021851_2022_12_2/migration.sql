-- DropIndex
DROP INDEX `User_email_key` ON `user`;

-- DropIndex
DROP INDEX `User_phone_key` ON `user`;

-- AlterTable
ALTER TABLE `user` MODIFY `avatar` VARCHAR(191) NULL DEFAULT '',
    MODIFY `phone` VARCHAR(191) NULL DEFAULT '',
    MODIFY `email` VARCHAR(191) NULL DEFAULT '',
    MODIFY `gender` ENUM('MAN', 'WOMAN') NULL;

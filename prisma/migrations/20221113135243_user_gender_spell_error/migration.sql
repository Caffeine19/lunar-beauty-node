/*
  Warnings:

  - The values [WOMON] on the enum `User_gender` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `gender` ENUM('MAN', 'WOMAN') NOT NULL;

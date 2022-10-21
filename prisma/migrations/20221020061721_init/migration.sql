/*
  Warnings:

  - Added the required column `x` to the `IngredientNode` table without a default value. This is not possible if the table is not empty.
  - Added the required column `y` to the `IngredientNode` table without a default value. This is not possible if the table is not empty.
  - Added the required column `x` to the `ProductNode` table without a default value. This is not possible if the table is not empty.
  - Added the required column `y` to the `ProductNode` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ingredientnode` ADD COLUMN `x` INTEGER NOT NULL,
    ADD COLUMN `y` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `productnode` ADD COLUMN `x` INTEGER NOT NULL,
    ADD COLUMN `y` INTEGER NOT NULL;

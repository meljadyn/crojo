/*
  Warnings:

  - Added the required column `hookSize` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pattern` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `row` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "hookSize" DECIMAL(2,2) NOT NULL,
ADD COLUMN     "pattern" VARCHAR(511) NOT NULL,
ADD COLUMN     "row" INTEGER NOT NULL;

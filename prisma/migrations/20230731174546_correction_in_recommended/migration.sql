/*
  Warnings:

  - You are about to drop the column `remommended` on the `Trip` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "remommended",
ADD COLUMN     "recommended" BOOLEAN NOT NULL DEFAULT false;

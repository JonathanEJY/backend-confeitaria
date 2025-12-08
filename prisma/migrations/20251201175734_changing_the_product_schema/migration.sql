/*
  Warnings:

  - You are about to drop the column `stockId` on the `products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."products" DROP CONSTRAINT "products_stockId_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "stockId";

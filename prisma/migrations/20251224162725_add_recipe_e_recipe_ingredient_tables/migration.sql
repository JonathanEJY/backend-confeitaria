/*
  Warnings:

  - You are about to drop the `Labor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Labor" DROP CONSTRAINT "Labor_userId_fkey";

-- DropTable
DROP TABLE "public"."Labor";

-- CreateTable
CREATE TABLE "labor" (
    "uuid" TEXT NOT NULL,
    "desiredSalary" DOUBLE PRECISION NOT NULL,
    "workDaysPerMonth" INTEGER NOT NULL,
    "workHoursPerDay" DOUBLE PRECISION NOT NULL,
    "electricity" DOUBLE PRECISION DEFAULT 0,
    "water" DOUBLE PRECISION DEFAULT 0,
    "rent" DOUBLE PRECISION DEFAULT 0,
    "wage" DOUBLE PRECISION DEFAULT 0,
    "gas" DOUBLE PRECISION DEFAULT 0,
    "internet" DOUBLE PRECISION DEFAULT 0,
    "other" DOUBLE PRECISION DEFAULT 0,
    "userId" TEXT NOT NULL,

    CONSTRAINT "labor_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "recipes" (
    "uuid" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "yield" DECIMAL(9,2) NOT NULL,
    "yieldUnit" "Unit" NOT NULL,
    "prepTimeMinutes" INTEGER NOT NULL DEFAULT 0,
    "ingredientsCost" DECIMAL(9,2) NOT NULL DEFAULT 0,
    "laborCost" DECIMAL(9,2) NOT NULL DEFAULT 0,
    "packagingCost" DECIMAL(9,2) NOT NULL DEFAULT 0,
    "totalCost" DECIMAL(9,2) NOT NULL DEFAULT 0,
    "profitMargin" DECIMAL(5,2),
    "suggestedPrice" DECIMAL(9,2),
    "userId" TEXT NOT NULL,

    CONSTRAINT "recipes_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "recipe_ingredients" (
    "uuid" TEXT NOT NULL,
    "quantity" DECIMAL(9,2) NOT NULL,
    "unitCost" DECIMAL(9,2) NOT NULL,
    "totalCost" DECIMAL(9,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "recipeId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "recipe_ingredients_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "labor_userId_key" ON "labor"("userId");

-- CreateIndex
CREATE INDEX "recipe_ingredients_recipeId_idx" ON "recipe_ingredients"("recipeId");

-- CreateIndex
CREATE INDEX "recipe_ingredients_productId_idx" ON "recipe_ingredients"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "recipe_ingredients_recipeId_productId_key" ON "recipe_ingredients"("recipeId", "productId");

-- AddForeignKey
ALTER TABLE "labor" ADD CONSTRAINT "labor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipes" ADD CONSTRAINT "recipes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe_ingredients" ADD CONSTRAINT "recipe_ingredients_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "recipes"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe_ingredients" ADD CONSTRAINT "recipe_ingredients_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

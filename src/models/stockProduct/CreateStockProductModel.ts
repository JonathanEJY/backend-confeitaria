import prisma from "../../../prisma/client";

export type StockProduct = {
  stockProductId: string;
  quantity: number;
  costPrice: number;
  lot?: string;
  expiresAt?: Date;
  productId: string;
  stockId: string;
};

class CreateStockProductModel {
  async createStockProduct(stockProductData: StockProduct) {
    const newStockProduct = await prisma.stockProduct.create({
      data: {
        quantity: stockProductData.quantity,
        lot: stockProductData.lot ?? null,
        expiresAt: stockProductData.expiresAt ?? null,
        costPrice: stockProductData.costPrice,
        productId: stockProductData.productId,
        stockId: stockProductData.stockId,
      },
    });
    return newStockProduct;
  }
}

export default CreateStockProductModel;
import prisma from "../../../prisma/client";
import type { StockProduct } from "../../types";

class UpdateStockProductModel {
  async updateStockProduct(stockProductData: StockProduct){
    try {
      const updatedStockProduct = await prisma.stockProduct.update({
        where: { uuid: stockProductData.stockProductId },
        data: {
          quantity: stockProductData.quantity,
          costPrice: stockProductData.costPrice,
          lot: stockProductData.lot ?? null,
          expiresAt: stockProductData.expiresAt ?? null,
          productId: stockProductData.productId,
        },
      });
      return updatedStockProduct;
    } catch (error) {
      throw new Error(`Error updating stock product: ${error}`);
    }
  }
}

export default UpdateStockProductModel;
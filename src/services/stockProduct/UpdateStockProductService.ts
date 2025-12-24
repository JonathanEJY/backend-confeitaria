import UpdateStockProductModel from "../../models/stockProduct/UpdateStockProductModel";

export type StockProduct = {
  stockProductId: string;
  quantity: number;
  costPrice: number;
  lot?: string;
  expiresAt?: Date;
  productId: string;
  stockId: string;
};

class UpdateStockProductService {
  async execute(stockProductData: StockProduct) {
    const updatedStockProduct = new UpdateStockProductModel();
    try {
      const result = await updatedStockProduct.updateStockProduct(stockProductData);
      return result;
    } catch (error) {
      console.error("Error updating stock product:", error);
      throw new Error("Failed to update stock product");
    }
  }
}

export default UpdateStockProductService;
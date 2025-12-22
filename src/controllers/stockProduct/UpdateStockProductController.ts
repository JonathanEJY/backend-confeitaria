import UpdateStockProductService from "../../services/stockProduct/UpdateStockProductService";
import { Request, Response } from "express";
import type { StockProduct } from "../../types";

class UpdateStockProductController {
  async handle(req: Request, res: Response) {
    const {
      stockProductId,
      quantity,
      costPrice,
      lot,
      expiresAt,
      productId,
      stockId,
    } = req.body;
    const updateStockProductService = new UpdateStockProductService();
    try {
      const updatedStockProduct = await updateStockProductService.execute({
        stockProductId,
        quantity,
        costPrice,
        lot,
        expiresAt,
        productId,
        stockId,
      } as StockProduct);
      return res.json(updatedStockProduct);
    } catch (error) {
      console.error("Error updating stock product:", error);
      return res.status(500).json({ error: "Failed to update stock product" });
    }
  }
}

export default UpdateStockProductController;

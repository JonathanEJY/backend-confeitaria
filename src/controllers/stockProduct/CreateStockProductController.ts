import CreateStockProductService from "../../services/stockProduct/CreateStockProductService";
import { Request, Response } from "express";

class CreateStockProductController {
  async handle(request: Request, response: Response) {
    const { productId, quantity, stockId, costPrice, expiresAt, lot } =
      request.body;

    if (!productId || !quantity || !stockId || !costPrice) {
      return response.status(400).json({
        error: "Missing required fields"
      });
    }

    const createStockProductService = new CreateStockProductService();
    
    // Monta o objeto apenas com os campos que existem
    const stockProductData: any = {
      productId,
      quantity: parseFloat(quantity),
      stockId,
      costPrice: parseFloat(costPrice),
    };

    // Adiciona campos opcionais apenas se existirem
    if (expiresAt) {
      stockProductData.expiresAt = new Date(expiresAt);
    }
    
    if (lot) {
      stockProductData.lot = lot;
    }

    try {
      const stockProduct = await createStockProductService.execute(
        stockProductData
      );
      return response.status(201).json(stockProduct);
    } catch (error) {
      console.error("Error creating stock product:", error);
      return response.status(400).json({ 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  }
}

export default CreateStockProductController;
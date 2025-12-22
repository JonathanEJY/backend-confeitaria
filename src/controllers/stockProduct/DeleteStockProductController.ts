import DeleteStockProductService from "../../services/stockProduct/DeleteStockProductService";
import { Request, Response } from "express";

class DeleteStockProductController {
  async handle(request: Request, response: Response) {
    const { stockProductId } = request.body;
    const deleteStockProductService = new DeleteStockProductService();

    try {
      const result = await deleteStockProductService.execute(stockProductId);

      return response.json(result);
    } catch (error) {
      return response.status(400).json({ error: error });
    }
  }
}

export default DeleteStockProductController;

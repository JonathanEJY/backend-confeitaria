import GetStockProductService from "../../services/stockProduct/GetStockProductService";
import { Request, Response } from "express";

class GetStockProductController {
  async handle(request: Request, response: Response) {
    const { stockId } = request.body;
    const getStockProductService = new GetStockProductService();
  
    try {
      const stockProduct = await getStockProductService.execute(stockId);
      return response.json(stockProduct);
    } catch (error) {
      return response.status(500).json({ error: error });
    }
  }
}

export default GetStockProductController;
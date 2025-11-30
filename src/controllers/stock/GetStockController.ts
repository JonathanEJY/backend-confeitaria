import GetStockService from "../../services/stock/GetStockService";
import { Request, Response } from "express";

class GetStockController {
  async handle(req: Request, res: Response) {
    const userId = req.user!.uuid;
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const getStockService = new GetStockService();
    const stock = await getStockService.execute(userId);
    return res.status(200).json(stock);
  }
}

export default GetStockController;

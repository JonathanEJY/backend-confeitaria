import GetAllProductService from "../../services/product/GetAllProductsService";
import { Request, Response } from "express";

class GetAllProductsController {
  async handle(req: Request, res: Response) {
    const userId = req.user!.uuid;

    const getAllProductService = new GetAllProductService();

    try {
      const products = await getAllProductService.execute(userId);
      return res.status(200).json(products);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

export default GetAllProductsController;

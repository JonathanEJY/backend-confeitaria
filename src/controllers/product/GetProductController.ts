import GetProductService from "../../services/product/GetProductService";
import { Request, Response } from "express";

class GetProductController {
  async handle(req: Request, res: Response) {
    const userId = req.user!.uuid;
    const productId = req.body.productId;

    const productData = {
      userId,
      productId,
    };

    const getProductService = new GetProductService();

    try {
      const product = await getProductService.execute(productData);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

export default GetProductController;

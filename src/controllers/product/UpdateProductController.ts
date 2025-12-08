import UpdateProductService from "../../services/product/UpdateProductService";
import type { Product } from "../../types";
import { Request, Response } from "express";

class UpdateProductController {
  async handle(req: Request, res: Response) {
    const userId = req.user!.userId
    const { uuid, name, unit } = req.body;
    const productData = {
      uuid,
      name,
      unit,
      userId
    }

    const updateProductService = new UpdateProductService();
    const updatedProduct = await updateProductService.execute(productData);

    return res.status(200).json(updatedProduct);
  }
}

export default UpdateProductController;

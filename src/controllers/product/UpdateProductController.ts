import UpdateProductService from "../../services/product/UpdateProductService";
import type { Product } from "../../types";
import { Request, Response } from "express";

class UpdateProductController {
  async handle(req: Request, res: Response) {
    const userId = req.user!.uuid;
    console.log("User ID from token:", userId);
    const { uuid, name, unit } = req.body;
    const productData: Product = {
      uuid,
      name,
      unit,
      userId,
    };

    // TODO: falta enviar o productId pelo client

    const updateProductService = new UpdateProductService();
    const updatedProduct = await updateProductService.execute(productData);

    return res.status(200).json(updatedProduct);
  }
}

export default UpdateProductController;

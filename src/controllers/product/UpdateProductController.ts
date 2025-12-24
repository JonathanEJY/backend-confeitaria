import UpdateProductService from "../../services/product/UpdateProductService";
import { Request, Response } from "express";
import type { Unit } from "../../types/common.types";

export type Product = {
  name: string;
  uuid?: string;
  unit: Unit;
  userId: string;
};

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

    const updateProductService = new UpdateProductService();
    const updatedProduct = await updateProductService.execute(productData);

    return res.status(200).json(updatedProduct);
  }
}

export default UpdateProductController;

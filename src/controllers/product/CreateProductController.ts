import CreateProductService from "../../services/product/CreateProductService";
import { Request, Response } from "express";

class CreateProductController {
    async handle(req: Request, res: Response) {
      const userId = req.user!.uuid;
      const { name, unit } = req.body;
      const productData = { name, unit, userId };
      const createProductService = new CreateProductService();
      const newProduct = await createProductService.execute(productData);
      return res.json(newProduct);
    }
}

export default CreateProductController;

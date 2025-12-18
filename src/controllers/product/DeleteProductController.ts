import DeleteProductService from "../../services/product/DeleteProductService";
import type { Request, Response } from "express";

interface DeleteProductData {
  uuid: string;
  userId: string;
}

class DeleteProductController {
  async handle(req: Request, res: Response) {
    const { productId } = req.body;
    const userId = req.user!.uuid;
    const productData: DeleteProductData = {
      uuid: productId,
      userId,
    };
    const deleteProductService = new DeleteProductService();
    const deletedProduct = await deleteProductService.execute(productData);
    return res.json(deletedProduct);
  }
}

export default DeleteProductController;

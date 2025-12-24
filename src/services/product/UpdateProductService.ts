import UpdateProductModel from "../../models/product/UpdateProductModel";
import type { Unit } from "../../types/common.types";

export type Product = {
  name: string;
  uuid?: string;
  unit: Unit;
  userId: string;
};


class UpdateProductService {
  async execute(productData: Product) {
    const updateProductModel = new UpdateProductModel();
    const updatedProduct = await updateProductModel.updateProduct(productData);
    return updatedProduct;
  }
}

export default UpdateProductService;
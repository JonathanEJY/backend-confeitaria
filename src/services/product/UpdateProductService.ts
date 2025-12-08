import UpdateProductModel from "../../models/product/UpdateProductModel";
import type { Product } from "../../types";

class UpdateProductService {
  async execute(productData: Product) {
    const updateProductModel = new UpdateProductModel();
    const updatedProduct = await updateProductModel.updateProduct(productData);
    return updatedProduct;
  }
}

export default UpdateProductService;
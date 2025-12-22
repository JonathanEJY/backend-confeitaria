import GetProductModel from "../../models/product/GetProductModel";
import type { productData } from "../../types";

class GetProductService {
  async execute(productData: productData) {
    const productModel = new GetProductModel();
    const product = await productModel.getProductById(productData);
    return product;
  }
}

export default GetProductService;

import GetProductModel from "../../models/product/GetProductModel";

export type productData = {
  userId: string;
  productId: string;
};

class GetProductService {
  async execute(productData: productData) {
    const productModel = new GetProductModel();
    const product = await productModel.getProductById(productData);
    return product;
  }
}

export default GetProductService;

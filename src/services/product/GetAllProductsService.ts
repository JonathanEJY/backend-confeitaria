import GetAllProductsModel from "../../models/product/GetAllProductsModel";

class GetAllProductsService {
  async execute(userId: string) {
    const productModel = new GetAllProductsModel();
    const products = await productModel.getAllProducts(userId);
    return products;
  }
}

export default GetAllProductsService;

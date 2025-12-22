import GetStockProductModel from "../../models/stockProduct/GetStockProductModel";

class GetStockProductService {
  async execute(stockId: string){
    const getStockProduct = new GetStockProductModel();
    const products = await getStockProduct.getStockProductsByStockId(stockId);
    return products;
  }
}

export default GetStockProductService;
import CreateStockProductModel from "../../models/stockProduct/CreateStockProductModel";
import type { StockProduct } from "../../types";

class CreateStockProductService {
  async execute(stockProductData: StockProduct){
    const createStockProductModel = new CreateStockProductModel();
    const productStock = await createStockProductModel.createStockProduct(stockProductData);
    return productStock;
  }    
}

export default CreateStockProductService;
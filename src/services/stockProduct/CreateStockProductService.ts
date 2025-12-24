import CreateStockProductModel from "../../models/stockProduct/CreateStockProductModel";

export type StockProduct = {
  stockProductId: string;
  quantity: number;
  costPrice: number;
  lot?: string;
  expiresAt?: Date;
  productId: string;
  stockId: string;
};

class CreateStockProductService {
  async execute(stockProductData: StockProduct){
    const createStockProductModel = new CreateStockProductModel();
    const productStock = await createStockProductModel.createStockProduct(stockProductData);
    return productStock;
  }    
}

export default CreateStockProductService;
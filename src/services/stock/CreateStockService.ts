import CreateStockModel from "../../models/stock/CreateStockModel";

export type Stock = {
  name: string;
  userId: string;
};

class CreateStockService {
  async execute(dataStock: Stock) {
    const createStockModel = new CreateStockModel();
    const newStock = await createStockModel.execute(dataStock);
    return newStock;
  }
}

export default CreateStockService;

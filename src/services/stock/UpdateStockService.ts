import UpdateStockModel from "../../models/stock/UpdateStockModel";

export type Stock = {
  name: string;
  userId: string;
};

class UpdateStockService {
  async execute(dataStock: Stock) {
    const updateStockModel = new UpdateStockModel();
    const updatedStock = await updateStockModel.updateStock(dataStock);

    return updatedStock;
  }
}

export default UpdateStockService;

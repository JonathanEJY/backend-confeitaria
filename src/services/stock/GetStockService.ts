import GetStockModel from "../../models/stock/GetStockModel";

class GetStockService {
  async execute(userId: string) {
    const getStockModel = new GetStockModel();
    const stock = await getStockModel.getStockById(userId);
    return stock;
  }
}

export default GetStockService;
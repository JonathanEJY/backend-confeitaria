import DeleteStockProductModel from "../../models/stockProduct/DeleteStockProductModel";

class DeleteStockProductService {
  async execute(stockProductId: string) {
    const deleteStockProduct = new DeleteStockProductModel();
    const result = await deleteStockProduct.deleteStockProductById(
      stockProductId
    );

    return result;
  }
}

export default DeleteStockProductService;

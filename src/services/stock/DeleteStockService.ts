import DeleteStockModel from "../../models/stock/DeleteStockModel";

class DeleteStockService {
    async execute(userId: string) {
        const deleteStockModel = new DeleteStockModel();
        const deletedStock = await deleteStockModel.deleteStock(userId);
        return deletedStock;
    }
}

export default DeleteStockService;

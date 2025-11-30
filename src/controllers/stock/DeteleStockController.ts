import DeleteStockModel from "../../models/stock/DeleteStockModel";
import { Request, Response } from "express";

class DeleteStockController {
    async handle(req: Request, res: Response) {
        const userId = req.user!.uuid;
        if (!userId) {
            return res.status(400).json({ error: "User ID is required" });
        }

        const deleteStockModel = new DeleteStockModel();
        const deletedStock = await deleteStockModel.deleteStock(userId);
        return res.status(200).json(deletedStock);
    }
}

export default DeleteStockController;
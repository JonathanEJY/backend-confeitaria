import UpdateStockService from "../../services/stock/UpdateStockService";
import { Request, Response } from "express";

class UpdateStockController {
  async handle(req: Request, res: Response) {
    const userId = req.user!.uuid;
    const { name } = req.body;
    const newStock = {
      userId,
      name,
    };
    const updateStockService = new UpdateStockService();
    const updatedStock = await updateStockService.execute(newStock);
    res.status(200).json(updatedStock);
  }
}

export default UpdateStockController;
// TODO: é preciso fazer um get no stockId usando o userId pra pegar. Talvez criar um utils?

// Controller: pega userId do JWT e name do body, chama service.
// Service: faz findUnique({ where: { userId } }), se não achar retorna 404, senão atualiza pelo uuid do stock.

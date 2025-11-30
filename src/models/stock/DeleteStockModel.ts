import prisma from "../../../prisma/client";

class DeleteStockModel {
  async deleteStock(userId: string) {
    try {
      const deletedStock = await prisma.stock.delete({
        where: { userId: userId },
      });
      return deletedStock;
    } catch (error) {
      throw new Error(`Failed to delete stock with ID ${userId}: ${`error`}`);
    }
  }
}

export default DeleteStockModel;

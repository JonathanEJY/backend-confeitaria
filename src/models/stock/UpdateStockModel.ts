import prisma from "../../../prisma/client";

export type Stock = {
  name: string;
  userId: string;
};

class UpdateStockModel {
  async updateStock(dataStock: Stock) {
    try {
      const updatedStock = await prisma.stock.update({
        where: { userId: dataStock.userId },
        data: {
          name: dataStock.name,
        },
      });
      return updatedStock;
    } catch (error) {
      throw new Error(
        `Failed to update stock with ID ${dataStock.userId}: ${error}`
      );
    }
  }
}

export default UpdateStockModel;
import prisma from "../../../prisma/client";

class GetStockModel {
  async getStockById(userId: string) {
    try {
      const stock = await prisma.stock.findUnique({
        where: { userId: userId },
        omit: {
          userId: true,
          uuid: true,
        },
      });
      return stock;
    } catch (error) {
      throw new Error(`Failed to retrieve stock with ID ${userId}: ${error}`);
    }
  }
}

export default GetStockModel;

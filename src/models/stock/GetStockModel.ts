import prisma from "../../../prisma/client";

class GetStockModel {
  async getStockById(userId: string) {
    try {
      const stock = await prisma.stock.findUnique({
        where: { userId: userId },
        omit:{
          userId: true,
          uuid: true,
        }
      });
      return stock;
    } catch (error) {
      throw new Error(`Failed to retrieve stock with ID ${userId}: ${error}`);
    }
  }
}

export default GetStockModel;

// Não faz sentido eu ter um model pra pegar o stockId sendo que eu preciso do userId pra identificar qual stock que eu quero.
// Talvez só faça sentido se o stock cresça e tenha outras características, mas no momento só tem o userId mesmo.

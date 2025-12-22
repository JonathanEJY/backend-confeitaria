import prisma from "../../../prisma/client";

class GetStockProductsModel {
  async getStockProductsByStockId(stockId: string) {
    const stockProducts = await prisma.stockProduct.findMany({
      where: {
        stockId: stockId,
      },
      include: {
        product: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return stockProducts;
  }

  // Busca todos os produtos de todos os estoques de um usuário
  async getStockProductsByUserId(userId: string) {
    const stockProducts = await prisma.stockProduct.findMany({
      where: {
        stock: {
          userId: userId, // Filtra pelo userId através do relacionamento
        },
      },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            createdAt: true,
            updatedAt: true,
          },
        }, // Dados do produto
        stock: true, // Dados do estoque
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return stockProducts;
  }
}

export default GetStockProductsModel;

import prisma from "../../../prisma/client";

export type Stock = {
  name: string;
  userId: string;
};

class CreateStockModel {
  async execute(dataStock: Stock) {
    const stock = await prisma.stock.create({
      data: {
        name: dataStock.name,
        userId: dataStock.userId,
      },
    });

    return stock;
  }
}

export default CreateStockModel;

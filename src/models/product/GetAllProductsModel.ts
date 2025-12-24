import prisma from "../../../prisma/client";

export type productData = {
  userId: string;
  productId: string;
};

class GetAllProductsModel {
  async getAllProducts(userId: string) {
    const products = await prisma.product.findMany({
      where: {
        userId: userId,
      },
      omit:{
        userId: true,
        uuid: true,
      }
    });
    return products;
  }
}

export default GetAllProductsModel;

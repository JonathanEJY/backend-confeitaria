import prisma from "../../../prisma/client";

export type productData = {
  userId: string;
  productId: string;
};

class GetProductModel {
  async getProductById(productData: productData) {
    const products = await prisma.product.findMany({
      where: {
        uuid: productData.productId,
        userId: productData.userId,
      },
    });
    return products;
  }
}

export default GetProductModel;

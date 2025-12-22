import prisma from "../../../prisma/client";
import type { productData } from "../../types";

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

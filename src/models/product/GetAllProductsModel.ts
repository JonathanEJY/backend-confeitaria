import prisma from "../../../prisma/client";
import type { productData } from "../../types";

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

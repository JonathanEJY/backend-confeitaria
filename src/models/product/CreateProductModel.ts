import prisma from "../../../prisma/client";
import type { Product } from "../../types";

class CreateProductModel {
  async createProduct(productData: Product){
    const newProduct = await prisma.product.create({
      data: {
        name: productData.name,
        unit: productData.unit,
        userId: productData.userId,
      },
    });
    return newProduct;
  }
}

export default CreateProductModel;
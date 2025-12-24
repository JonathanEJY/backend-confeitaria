import prisma from "../../../prisma/client";
import type { Unit } from "../../types/common.types";

export type Product = {
  name: string;
  uuid?: string;
  unit: Unit;
  userId: string;
};

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
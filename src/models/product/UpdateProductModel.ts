import prisma from "../../../prisma/client";
import type { Unit } from "../../types/common.types";

export type Product = {
  name: string;
  uuid?: string;
  unit: Unit;
  userId: string;
};

class UpdateProductModel {
  async updateProduct(productData: Product){
    if (!productData.uuid) {
      throw new Error("Product UUID is required for update.");
    }
    const newProduct = await prisma.product.update({
      where: {
        uuid: productData.uuid,
        userId: productData.userId,
      },
      data: {
        name: productData.name,
        unit: productData.unit,
      },
    });
    return newProduct;  
  }
  
}

export default UpdateProductModel;
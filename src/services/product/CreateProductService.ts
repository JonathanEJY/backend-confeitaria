import CreateProductModel from "../../models/product/CreateProductModel";
import type { Unit } from "../../types/common.types";

export type Product = {
  name: string;
  uuid?: string;
  unit: Unit;
  userId: string;
};


class CreateProductService {
    async execute(productData: Product) {
        const createProductModel = new CreateProductModel();
        const newProduct = await createProductModel.createProduct(productData);
        return newProduct;
    }
}

export default CreateProductService;
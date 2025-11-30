import CreateProductModel from "../../models/product/CreateProductModel";
import type { Product } from "../../types";


class CreateProductService {
    async execute(productData: Product) {
        const createProductModel = new CreateProductModel();
        const newProduct = await createProductModel.createProduct(productData);
        return newProduct;
    }
}

export default CreateProductService;
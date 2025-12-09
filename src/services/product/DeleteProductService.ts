import DeleteProductModel from "../../models/product/DeleteProductModel";

interface DeleteProductData {
    uuid: string;
    userId: string;
}

class DeleteProductService {
    async execute(productData: DeleteProductData) {
        const deletedProductModel = new DeleteProductModel();
        const deleteProduct = await deletedProductModel.deleteProduct(productData);
        return deleteProduct;
    }
}

export default DeleteProductService;

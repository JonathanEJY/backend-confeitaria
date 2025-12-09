import prisma from "../../../prisma/client";

interface DeleteProductData {
    uuid: string;
    userId: string;
}

class DeleteProductModel {
    async deleteProduct(productData: DeleteProductData) {
        if (!productData.uuid || !productData.userId) {
            throw new Error("Missing required fields");
        }
        const deletedProduct = await prisma.product.delete({
            where: {
                uuid: productData.uuid,
                userId: productData.userId,
            },
        });
        return deletedProduct;
    }
}

export default DeleteProductModel;

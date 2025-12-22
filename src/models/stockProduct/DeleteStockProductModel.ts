import prisma from "../../../prisma/client";

class DeleteStockProductModel {
  async deleteStockProductById(stockProductId: string) {
    try {
      const deletedStockProduct = await prisma.stockProduct.delete({
        where: { uuid: stockProductId },
      });
      return deletedStockProduct;
    } catch (error) {
      console.error("Error deleting stock product:", error);
      throw new Error("Failed to delete stock product");
    }
  }
}

export default DeleteStockProductModel;

import express from "express";

import CreateUserController from "./controllers/user/CreateUserController";
import GetUserController from "./controllers/user/GetUserController";
import UpdateUserController from "./controllers/user/UpdateUserController";
import DeleteUserController from "./controllers/user/DeleteUserController";
import LoginUserController from "./controllers/user/LoginUserController";

import CreateLaborController from "./controllers/labor/CreateLaborController";
import GetLaborController from "./controllers/labor/GetLaborController";
import UpdateLaborController from "./controllers/labor/UpdateLaborController";
import DeleteLaborController from "./controllers/labor/DeleteLaborController";

import CreateStockController from "./controllers/stock/CreateStockController";
import GetStockController from "./controllers/stock/GetStockController";
import UpdateStockController from "./controllers/stock/UpdateStockController";
import DeleteStockController from "./controllers/stock/DeteleStockController";

import CreateProductController from "./controllers/product/CreateProductController";
import GetProductController from "./controllers/product/GetProductController";
import GetAllProductsController from "./controllers/product/GetAllProductsController";
import UpdateProductController from "./controllers/product/UpdateProductController";
import DeleteProductController from "./controllers/product/DeleteProductController";

import CreateStockProductController from "./controllers/stockProduct/CreateStockProductController";
import GetStockProductController from "./controllers/stockProduct/GetStockProductController";
import DeleteStockProductController from "./controllers/stockProduct/DeleteStockProductController";
import UpdateStockProductController from "./controllers/stockProduct/UpdateStockProductController";

import { authMiddleware } from "./middleware/authMiddleware";

const router = express.Router();
const getLaborController = new GetLaborController();

// User
const loginUserController = new LoginUserController();
router.post("/login", loginUserController.handle);

const createUserController = new CreateUserController();
router.post("/users", createUserController.handle);

const deleteUserController = new DeleteUserController();
router.delete("/users", authMiddleware, deleteUserController.handle);

const updateUserController = new UpdateUserController();
router.patch("/users", authMiddleware, updateUserController.handle);

const getUserController = new GetUserController();
router.get("/users", authMiddleware, getUserController.handle);

// Labor
const createLaborController = new CreateLaborController();
router.post("/users/labor", authMiddleware, createLaborController.handle);

const deleteLaborController = new DeleteLaborController();
router.delete("/users/labor", authMiddleware, deleteLaborController.handle);

router.get("/users/labor", authMiddleware, getLaborController.handle);

const updateLaborController = new UpdateLaborController();
router.patch("/users/labor", authMiddleware, updateLaborController.handle);

// Stock
const createStockController = new CreateStockController();
router.post("/users/stock", authMiddleware, createStockController.handle);

const updateStockController = new UpdateStockController();
router.patch("/users/stock", authMiddleware, updateStockController.handle);

const getStockController = new GetStockController();
router.get("/users/stock", authMiddleware, getStockController.handle);

const deleteStockController = new DeleteStockController();
router.delete("/users/stock", authMiddleware, deleteStockController.handle);

// Product
const createProductController = new CreateProductController();
router.post("/users/product", authMiddleware, createProductController.handle);

const updateProductController = new UpdateProductController();
router.patch("/users/product", authMiddleware, updateProductController.handle);

const deleteProductController = new DeleteProductController();
router.delete("/users/product", authMiddleware, deleteProductController.handle);

const getProductController = new GetProductController();
router.get("/users/product", authMiddleware, getProductController.handle);

const getAllProductsController = new GetAllProductsController();
router.get("/users/products", authMiddleware, getAllProductsController.handle);

// StockProduct
const createStockProductController = new CreateStockProductController();
router.post(
  "/stock/products",
  authMiddleware,
  createStockProductController.handle
);

const getStockProductController = new GetStockProductController();
router.get("/stock/products", authMiddleware, getStockProductController.handle);

const deleteStockProductController = new DeleteStockProductController();
router.delete(
  "/stock/products",
  authMiddleware,
  deleteStockProductController.handle
);

const updateStockProductController = new UpdateStockProductController();
router.patch(
  "/stock/products",
  authMiddleware,
  updateStockProductController.handle
);

export default router;

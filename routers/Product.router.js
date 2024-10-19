import { Router } from "express";
// import getProducts from "../controllers/productController";
import upload from "../middlewares/multer.middleware.js";
import {
  createProducts,
  getProducts,
} from "../controllers/productController.js";

const productRouter = Router();

productRouter
  .route("/")
  .get(getProducts)
  .post(upload.single("image"), createProducts);

export default productRouter;

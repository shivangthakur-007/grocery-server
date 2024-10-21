import { Router } from "express";
import upload from "../middlewares/multer.middleware.js";
import { createProducts, getProducts } from "../controllers/product.Controllers.js";

const productRouter = Router();

productRouter
  .route("/")
  .get(getProducts)
  .post(upload.single("image"), createProducts);

export default productRouter;

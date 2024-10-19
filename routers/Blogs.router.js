import { Router } from "express";
import { createBlogs, getBlogs } from "../controllers/Blog.controller.js";
import upload from "../middlewares/multer.middleware.js";

const Blogsrouter = Router();

Blogsrouter.route("/").get(getBlogs).post(upload.single("image"), createBlogs);

export default Blogsrouter;
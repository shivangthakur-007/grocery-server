import BlogStories from "../models/Blog.model.js";
import appError from "../utils/error.utils.js";
import cloudinary from "cloudinary";

const getBlogs = async function (req, res, next) {
  try {
    const Blogs = await BlogStories.find({});
    res.status(200).json({
      success: true,
      message: "All Products",
      Blogs,
    });
  } catch (e) {
    return next(new appError(e.message), 400);
  }
};

const createBlogs = async function (req, res, next) {
  try {
    const { date, headings, tags } = req.body;
    const Blogs = await BlogStories.create({
      date,
      image: {
        public_id: "Dummy",
        secure_url: "Dummy",
      },
      headings,
      tags,
      role,
    });

    if (!Blogs) {
      return next(new appError("Could not be created, Please try again", 500));
    }
    if (req.file) {
      try {
        const result = await cloudinary.v2.uploader.upload(req.file.path, {
          folder: "blogstore",
        });
        if (result) {
          Blogs.image.public_id = result.image.public_id;
          Blogs.image.secure_url = result.image.secure_url;
        }
        fs.rm(`uploads/${req.file.filename}`);
      } catch (e) {
        return next(new appError(e.message, 400));
      }
    }
    await Blogs.save();
    res.status(200).json({
      success: true,
      message: "Blogs created Successfully",
      Blogs,
    });
  } catch (e) {
    return next(new appError(e.message, 400));
  }
};

export { getBlogs, createBlogs };

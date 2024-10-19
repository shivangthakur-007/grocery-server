import { model, Schema } from "mongoose";

const ProductSchema = new Schema({
  image: {
    public_id: {
      type: String,
      required: true,
    },
    secure_url: {
      type: String,
      required: true,
    },
  },
  category: {
    type: String,
    required: [true, "Category is required"],
    maxlength: [30, "Category upto 30 characters."],
    trim: true,
  },
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [4, "Name atleast 4 characters."],
    trim: true,
  },
  review: { type: Number, default: 0 },
  Role: { type: String, enum: ["USER", "ADMIN"], default: "ADMIN" },
  price: { type: Number, default: 0 },
});

const ProductStore = model("Productstore", ProductSchema);
export default ProductStore;

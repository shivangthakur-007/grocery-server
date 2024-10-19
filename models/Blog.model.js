import { model, Schema } from "mongoose";

const BlogsSchema = new Schema({
  date: { type: String, required: true },
  image: {
    public_id: {
        type: String,
        required: true,
    },
    secure_url:{
        type: String,
        required: true,
    }
  },
  headings: {
    type: String,
    required: [true, 'headings is required'],
    minlength: [5, "Headings at least 5 characters"] 
  },
  tags:{
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum:["User", 'Admin'],
    default: 'Admin'
  },
});


const BlogStories= model("Blogstore", BlogsSchema);

export default BlogStories;
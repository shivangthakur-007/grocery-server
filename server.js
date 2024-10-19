import { config } from "dotenv";
config();
import app from "./app.js";
import cloudinary from "cloudinary"
import ConnectionToDb from "./db/dbconnection.js";

const PORT = process.env.PORT || 5000;

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(PORT, async () => {
  await ConnectionToDb();
  console.log(`port is running successfull at localhost://${PORT}`);
});

import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ "Access-Control-Allow-Origin": "*" }));

app.use(cookieParser());
app.use(morgan("dev"));

// app.use("/api/vi/product", productRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});
app.all("*", (req, res) => {
  res.status(404).send("Oops Page Not found");
});


export default app;
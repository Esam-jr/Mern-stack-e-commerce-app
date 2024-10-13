import express from "express";
import dontenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import path from "path";

dontenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const _dirname = path.resolve();

app.use(express.json());
app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "/Frontend/dist")));
}

app.get("*", (req, res) => {
  res.sendFile(path.resolve(_dirname, "Frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  connectDB();
  console.log("server started at port " + PORT);
});

// Ytlpb3graCSTS6os

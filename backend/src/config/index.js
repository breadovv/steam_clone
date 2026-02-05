import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import libraryRoutes from "./routes/library.routes.js";
import orderRoutes from "./routes/order.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"));

app.use("/api/auth", authRoutes);
app.use("/api/library", libraryRoutes);
app.use("/api/orders", orderRoutes);

app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log("Server running on port " + process.env.PORT)
);

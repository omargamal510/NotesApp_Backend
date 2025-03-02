import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export function dbConnection() {
  mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("db connected !"))
    .catch((err) => console.log("db error"));
}

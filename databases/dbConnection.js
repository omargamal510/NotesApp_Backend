import mongoose from "mongoose";

export function dbConnection() {
  mongoose
    .connect("mongodb+srv://root:12345@cluster0.tfaaz.mongodb.net/notes_app")
    .then(() => console.log("db connected !"))
    .catch((err) => console.log("db error"));
}

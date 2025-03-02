import express from "express";
import { dbConnection } from "./databases/dbConnection.js";
import { userRouter } from "./src/modules/user.router.js";
// import noteRouter from "./src/modules/note/note.router.js";

const app = express();
const port = 8000;
app.use(express.json());
app.use(userRouter);

// app.use(noteRouter);

dbConnection();

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

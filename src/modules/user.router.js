import express from "express";
import { signin, signup } from "./user.controller.js";
import { hashPassword } from "../middleware/hashPassword.js";
import { checkEmailExists } from "../middleware/checkEmailExists.js";

export const userRouter = express.Router();

userRouter.post("/signup", checkEmailExists, hashPassword, signup);
userRouter.post("/signin", signin);

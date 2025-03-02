import { userModel } from "../../databases/models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const signup = async (req, res) => {
  await userModel.insertMany(req.body);
  res.json({ message: "Register  successfull" });
};

const signin = async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });

  let token = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.JWT_SECRET
  );

  if (user && bcrypt.compareSync(req.body.password, user.password))
    return res.json({ message: "login success", token });

  res.json({ message: "Incorrect email or password" });
};

export { signup, signin };

import { userModel } from "../../databases/models/user.model.js";

export async function checkEmailExists(req, res, next) {
  const user = await userModel.findOne({ email: req.body.email });
  if (user) return res.json({ message: "Email already exists" });

  next();
}

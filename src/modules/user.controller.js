import { userModel } from "../../databases/models/user.model.js";
import bcrypt from "bcrypt";

const signup = async (req, res) => {
  await userModel.insertMany(req.body);
  res.json({ message: "Register  successfull" });
};

const signin = async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });
  //   let match = ;
  // let token = jwt.sign(
  //   { userId: user._id, role: user.role },
  //   "myNameIsOmarGamalElden"
  // );

  // myNameIsOmar is a secret key

  if (user && bcrypt.compareSync(req.body.password, user.password))
    return res.json({ message: "login success" });

  // t or f
  //     if (match) {
  //       return res.json({ message: "login .. token" });
  //     }
  //   } else {
  //     return res.json({ message: "Incorrect email or password" });
  //   }

  res.json({ message: "Incorrect email or password" });
};

export { signup, signin };

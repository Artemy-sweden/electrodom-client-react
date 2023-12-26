const User = require("./models/User");
const Role = require("./models/Role");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { secret } = require("./config");

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

class authController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Ошибка при регистрации", errors });
      }
      const { name, password } = req.body;
      // const candidate = await User.findOne({ name });
      // if (candidate) {
      //   return res.status(400).json({
      //     message: "User with the same telephone number has already exists",
      //   });
      // }
      const hashPassword = bcrypt.hashSync(password, 7);
      const user = {
        name,
        password: hashPassword,
        roles: ["USER"],
      };
      // await user.save();
      // return res.json({ message: "The user was successfully registrated" });
      return res.json({
        message: `POST zapros, password: '''${password}''' & hash:  '''${hashPassword}'''`,
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: `Registration error ${req.body}` });
    }
  }
  async login(req, res) {
    try {
      const { name, password } = req.body;
      const user = {
        id: 101,
        username: name,
        password:
          "$2a$07$ynfn4UUf2sobO8vix9w1/.kz/PXCjgASXAGRmgTqiWtocE0/3c8FW",
        roles: ["USER"],
      };
      // const user = await User.findOne({ name });
      // if (!user)
      //   return res
      //     .status(400)
      //     .json({ message: "Пользователь с таким логином не найден" });
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: "Пароль не верный" });
      }
      const token = generateAccessToken(user.id, user.roles);
      return res.json({ token });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Login error" });
    }
  }
  async getUser(req, res) {
    try {
      const userData = "ahahahaahahahahahUSERDATA";
      res.json(userData);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new authController();

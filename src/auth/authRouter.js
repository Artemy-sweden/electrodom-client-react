const Router = require("express");
const router = new Router();
const controller = require("./authController");
const { check } = require("express-validator");
const authMiddleware = require("./middleware/authMiddleware");
const roleMiddleware = require("./middleware/roleMiddleware");

router.post(
  "/registration",
  [
    check("name", "Имя пользователя не может быть пустым").notEmpty(),
    check(
      "password",
      "Пароль должен быть длиннее 4-х и короче 16 символов"
    ).isLength({ min: 4, max: 16 }),
  ],
  controller.registration
);
router.post("/login", controller.login);
router.get("/user", roleMiddleware(["USER"]), controller.getUser);

module.exports = router;

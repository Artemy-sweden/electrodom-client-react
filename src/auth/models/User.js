//const { Schema, model } = require("mongoose");

const User = {
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  roles: [{ type: String, ref: "Role" }],
};

module.exports = User;

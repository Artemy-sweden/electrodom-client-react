const express = require("express");
const authRouter = require("./authRouter");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use("/auth", authRouter);

const start = () => {
  try {
    //await const users = fetch("http://localhost:3001/users").then(res);
    app.listen(PORT, () => console.log(`server stdrtded on a PORT: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();

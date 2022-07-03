const express = require("express");

const { userRouter } = require("./users/users.route")
const app = express();
const port = 8000;

app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

app.use(express.static("./"));

app.use(express.json());
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/play", (req, res) => {
  res.render("game");
});

app.listen(port, () => console.log(`Started a server on port ${port}`));
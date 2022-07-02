const express = require("express");
const { userRouter } = require("./users/users.route");

const app = express();
const port = 8000;

app.use(express.json());
app.use("/users", userRouter);

// 404 handler
app.use((req, res, next) => {
  return res.status(404).json({
    status: "Fail",
    errors: "Endpoint doesn't exist"
  })
});

app.listen(port, () => console.log(`Started a server on port ${port}`));
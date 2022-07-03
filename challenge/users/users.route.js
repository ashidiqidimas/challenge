const express = require("express");
const userServices = require("./users.services")

const userRouter = express.Router();

userRouter.post("/login", userServices.login);

userRouter.get("/", userServices.getAllUsers);

module.exports = { userRouter };
const express = require("express");
const userServices = require("./users.services")

const userRouter = express.Router();

userRouter.get("/", userServices.getAllUsers);

userRouter.get("/:id", userServices.getUser);

userRouter.post("/create", userServices.createUser);

userRouter.post("/update", userServices.updateUser);

userRouter.get("/delete/:id", userServices.deleteUser);

module.exports = { userRouter };
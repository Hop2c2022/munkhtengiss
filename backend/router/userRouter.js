const express = require("express");
const {
  userPostController,
  userGetControllerById,
  usersGetController,
  userUpdateController,
  userDeleteController,
} = require("../controller/userController");

const UserRouter = express
  .Router()
  .post("/user", userPostController)
  .get("/user/:id", userGetControllerById)
  .get("/users", usersGetController)
  .patch("/user/:id", userUpdateController)
  .delete("/user/:id", userDeleteController);

module.exports = UserRouter;

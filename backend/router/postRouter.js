const express = require("express");
const {
  postPostController,
  postGetControllerById,
  postsGetController,
  postUpdateController,
  postDeleteController,
} = require("../controller/postController");

const PostRouter = express
  .Router()
  .get("/post/:id", postGetControllerById)
  .get("/posts", postsGetController)
  .post("/user/:id/post", postPostController)
  .patch("/post/:id", postUpdateController)
  .delete("/post/:id", postDeleteController);

module.exports = PostRouter;

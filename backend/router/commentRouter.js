const express = require("express");
const {
  commentPostController,
  commentsGetController,
  commentGetControllerById,
  commentUpdateController,
  commentDeleteController,
} = require("../controller/commentsController");

const CommentRouter = express
  .Router()
  .get("/comments", commentsGetController)
  .get("/comment/:id", commentGetControllerById)
  .patch("/comment/:id", commentUpdateController)
  .delete("/comment/:id", commentDeleteController)
  .post("/user/:userId/post/:postId", commentPostController);

module.exports = CommentRouter;

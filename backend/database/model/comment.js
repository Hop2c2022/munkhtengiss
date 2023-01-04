const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  comment: { type: String, required: true },
  userId: { type: String, required: true },
  postId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const CommentModel = mongoose.model("comments", CommentSchema);

module.exports = CommentModel;

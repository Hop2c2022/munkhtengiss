const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  post: { type: String, required: true },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const PostModel = mongoose.model("posts", PostSchema);

module.exports = PostModel;

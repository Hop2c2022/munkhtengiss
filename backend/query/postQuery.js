const PostSchema = require("../database/model/post");
const mongoose = require("mongoose");

exports.postPost = async (req, res) => {
  const { post } = req.body;
  const { id } = req.params;
  const result = await new PostSchema({
    post: post,
    userId: id,
  }).save();
  return result;
};

exports.postId = async (req, res) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await PostSchema.findById({ _id: objId });
  return result;
};
exports.postGet = async (req, res) => {
  const result = await PostSchema.find();
  return result;
};
exports.postUpdate = async (req, res) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await PostSchema.findById({ _id: objId });
  const { post } = req.body;
  await PostSchema.findByIdAndUpdate(result, {
    post: post,
  });
};
exports.postDelete = async (req, res) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await PostSchema.findById({ _id: objId });
  await PostSchema.findByIdAndRemove(result);
};

const mongoose = require("mongoose");
const CommentSchema = require("../database/model/comments");

exports.commentPostController = async (req, res) => {
  try {
    const { comment } = req.body;
    const { userId } = req.params;
    const { postId } = req.params;
    const result = await new CommentSchema({
      comment: comment,
      userId: userId,
      postId: postId,
    }).save();
    res.status(201).send({ data: result });
  } catch (err) {
    console.log(err);
  }
};

exports.commentGetControllerById = async (req, res) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await CommentSchema.findById({ _id: objId });
  res.send({ data: result });
};

exports.commentsGetController = async (req, res) => {
  const result = await CommentSchema.find();
  res.send({ data: result });
};

exports.commentUpdateController = async (req, res) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await CommentSchema.findById({ _id: objId });
  const { comment } = req.body;
  try {
    await CommentSchema.findByIdAndUpdate(result, {
      comment: comment,
    });
    res.send(`SUCCESSFULLY CHANGED`);
  } catch (err) {
    console.log(err);
  }
};

exports.commentDeleteController = async (req, res) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await CommentSchema.findById({ _id: objId });
  try {
    await CommentSchema.findByIdAndRemove(result);
    res.send(`Successfully deleted `);
  } catch (err) {
    console.log(err);
  }
};

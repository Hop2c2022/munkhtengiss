const UserSchema = require("../database/model/users");
const mongoose = require("mongoose");

exports.createUser = async (req) => {
  const { username, password, email, gender } = req.body;
  const result = await new UserSchema({
    username: username,
    password: password,
    email: email,
    gender: gender,
  }).save();
  return result;
};

exports.userUpdate = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await UserSchema.findById({ _id: objId });
  const { username, password, email, gender } = req.body;
  await UserSchema.findByIdAndUpdate(result, {
    username: username,
    password: password,
    email: email,
    gender: gender,
  });
};
exports.userDelete = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await UserSchema.findById({ _id: objId });
  await UserSchema.findByIdAndRemove(result);
};
exports.usersGet = async () => {
  const result = await UserSchema.find();
  return result;
};

exports.userId = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await UserSchema.findById({ _id: objId });
  return result;
};

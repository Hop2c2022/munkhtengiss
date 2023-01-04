const {
  createUser,
  userUpdate,
  usersGet,
  userDelete,
  userId,
} = require("../query/userQuery");

exports.userGetControllerById = async (req, res) => {
  try {
    const result = await userId(req);
    res.send({ data: result });
  } catch (err) {
    res.send(err.message);
  }
};

exports.usersGetController = async (req, res) => {
  try {
    const result = await usersGet();
    res.send({ data: result });
  } catch (err) {
    res.send(err.message);
  }
};

exports.userPostController = async (req, res) => {
  try {
    const result = await createUser(req);
    res.status(201).send(result);
  } catch (err) {
    res.send(err.message);
  }
};

exports.userUpdateController = async (req, res) => {
  try {
    await userUpdate(req);
    res.send(`Successfully updated `);
  } catch (err) {
    res.send(err.message);
  }
};

exports.userDeleteController = async (req, res) => {
  try {
    await userDelete(req);
    res.send(`Successfully deleted `);
  } catch (err) {
    res.send(err.message);
  }
};

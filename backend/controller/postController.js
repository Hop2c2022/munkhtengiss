const {
  postPost,
  postId,
  postGet,
  postUpdate,
  postDelete,
} = require("../query/postQuery");
exports.postPostController = async (req, res) => {
  try {
    const result = await postPost(req, res);
    res.status(201).send({ data: result });
  } catch (err) {
    console.log(err);
  }
};

exports.postGetControllerById = async (req, res) => {
  const result = await postId(req, res);
  res.send({ data: result });
};

exports.postsGetController = async (req, res) => {
  const result = await postGet(req, res);
  res.send({ data: result });
};

exports.postUpdateController = async (req, res) => {
  try {
    const result = await postUpdate(req, res);
    res.send(`SUCCESSFULLY CHANGED`);
  } catch (err) {
    console.log(err);
  }
};

exports.postDeleteController = async (req, res) => {
  try {
    const result = await postDelete(req, res);
    res.send(`Successfully deleted `);
  } catch (err) {
    console.log(err);
  }
};

const User = require("../models/User");

async function handleGetAllUsers(req, res) {
  const allDBUsers = await User.find({});
  return res.json(allDBUsers);
}
async function handlegetUserByID(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "user not found" });
  return res.json(user);
}

async function handleUpdateByID(req, res) {
  await User.findByIdAndUpdate(req.params.id);
  return res.json({ status: "success", msg: "user updated successfully" });
}
async function handledelByID(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "success", msg: "user deleted successfully" });
}

async function handleCreateByID(req, res) {
  const body = req.body;
  // console.log("body", body);

  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "all fields are rquire" });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });
  console.log("reslut", result);
}

module.exports = {
  handleGetAllUsers,
  handlegetUserByID,
  handleUpdateByID,
  handledelByID,
  handleCreateByID,
};

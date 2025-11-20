const express = require("express");
const {
  handleGetAllUsers,
  handlegetUserByID,
  handleUpdateByID,
  handledelByID,
  handleCreateByID,
} = require("../controllers/user");

const router = express.Router();

router.route("/").get(handleGetAllUsers).post(handleCreateByID);

router
  .route("/:id")
  .get(handlegetUserByID)
  .patch(handleUpdateByID)
  .delete(handledelByID);

module.exports = router;

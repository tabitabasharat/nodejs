const express = require("express");
const { generatenewshorturl } = require("../controllers/url");
const router = express.Router();

router.post('/',generatenewshorturl);

module.exports = router;
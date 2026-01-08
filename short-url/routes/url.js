const express = require("express");
const { generatenewshorturl, handleGetAnalytics } = require("../controllers/url");
const router = express.Router();

router.post('/', generatenewshorturl);
router.get('/analytics/:shortId',   handleGetAnalytics);
module.exports = router;
const shortid = require("shortid");
const url = require("../models/url");

async function generatenewshorturl(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ err: "Url is required" });
  }
  const shortID = shortid();
  await url.create({
    shortId: shortID,
    redirectUrl: body.url,
    totalClicks: [],
  });
  
  return res.json({id:shortID });
}

module.exports = {
  generatenewshorturl,
};

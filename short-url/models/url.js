const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    require: true,
    unique: true,
  },
  redirectUrl: {
    type: String,
    require: true,
  },
  totalClicks: [
    {
      timestamp: {
        type: Number,
      },
    },
  ],
}, {timestamps: true });

const url = mongoose.model('url', urlSchema);

module.exports = url;

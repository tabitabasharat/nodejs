const express = require("express");
const path = require("path");
const { connectDB } = require("./connect");
const urlRouter = require("./routes/url");
const staticRouter = require("./routes/staticRouter");
const URL = require("./models/url");
const app = express();
const port = 8000;

connectDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("Database connected")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false  }));

app.use("/url", urlRouter);
app.use("/", staticRouter);
app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    { 
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectUrl)
});
app.listen(port, () => console.log(`Server is running on Port:${port}`));

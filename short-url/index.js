const express = require("express");
const {connectDB} = require("./connect");
const urlRouter = require("./router/url");
const app = express();
const port = 8000;

connectDB("mongodb://127.0.0.1:27017/short-url")
  .then(() => console.log("Database connected"));

app.use(express.json());

app.use("/url", urlRouter);

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);

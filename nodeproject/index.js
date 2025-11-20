const express = require("express");
const { connectMongoDB } = require("./connection");
const { logReqRes } = require("./middlewares");
const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

//Connection
connectMongoDB("mongodb://127.0.0.1:27017/learning-mongoose").then(() => {
  console.log("Mongodb connected");
});

//middleware or plugins
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server stated at PORT": ${PORT}`);
});

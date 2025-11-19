const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const { log } = require("console");
const app = express();

const PORT = 8000;
//middleware or plugins
app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/api/users", (req, res) => {
  res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) return res.status(404).json({ error: "user not found" });
    return res.json(user);
  })
  .patch((req, res) => {
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => {
      return user.id === id;
    });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(user), (err) => {
      return res.json({ status: "pending" });
    });
  });

app.post("/api/users", (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json.stringify({ msg: "all fields are rquire" });
  }
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.status(201).json({ status: "success", id: users.length });
  });
});

app.patch("/api/users/:id", (req, res) => {
  //todo : edit user with id
  return res.josn({ status: "pending" });
});

app.listen(PORT, () => {
  console.log("Server stated!");
});

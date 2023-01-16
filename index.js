const express = require("express");
const app = express();
var path = require('path');
const port = 3300;
const routes = require("./routes/routes");
const usersRouter = require("./routes/users");
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/routes", routes);
app.use("/users", usersRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.get("/", (req, res) => {
  res.sendFile(__dirname, "index.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

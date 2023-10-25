const express = require('express');
const path = require('path');
const { authPage } = require('./middlewares/auth-middleware');
const port = 3000;

const app = express();
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")))

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend/html", "index.html"));
})

app.get("/public", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend/html", "public.html"));
})

app.get("/user", authPage(["USER", "ADMIN"]), (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend/html", "user.html"));
})

app.get("/admin", authPage(["ADMIN"]), (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend/html", "admin.html"));
})

app.get("/401", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend/html", "401.html"));
})

app.all("*", (req, res) => {
  res.sendFile(path.resolve("frontend/html", "404.html"));
})

app.listen(port, function(error) {
  if (error) {
    console.log('Something went wrong', error)
  } else {
    console.log('Server is listening on port ' + port)
  }
});
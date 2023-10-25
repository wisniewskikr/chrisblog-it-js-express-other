const express = require('express');
const path = require('path');
const port = 3000;

const app = express();
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")))

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend/html", "helloworld.html"));
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
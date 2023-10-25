const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve("frontend/html", "helloworld.html"));
})

app.listen(port, function(error) {
  if (error) {
    console.log('Something went wrong', error)
  } else {
    console.log('Server is listening on port ' + port)
  }
});
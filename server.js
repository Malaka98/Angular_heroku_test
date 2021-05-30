const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/my-app', 'index.html'));
});

app.listen(9000 || process.env.PORT, () => {
  console.log("Server start");
});
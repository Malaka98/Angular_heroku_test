const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'dist/Angular_heroku_test/index.html'));
});

app.listen(5000 || process.env.PORT, () => {
  console.log("Server start");
});
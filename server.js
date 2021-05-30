const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./dist/Angular_heroku_test'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', {root: 'dist/Angular_heroku_test'});
});

app.listen(5000 || process.env.PORT, () => {
  console.log("Server start");
});
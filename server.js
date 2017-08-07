var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT;

app.use(express.static('public'));

app.listen(port, function (err) {
  if (err) { throw err; }
  console.log('Listening on port ' + port);
});

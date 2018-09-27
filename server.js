// server.js
const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();

const port = 8000;

require('./functions/index')(app, {});

app.listen((process.env.PORT || port), () => {
  console.log('We are live on ' + port);
});

const express = require('express');
const cors = require('cors')
const app = express();

const PORT = '3001'
const API_URL = `http://localhost:${PORT}`

app.use(cors())
app.use(require('./controller'))

app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.listen(PORT, function () {
  console.log(`Data being served from ${API_URL}`);
});
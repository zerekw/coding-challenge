const express = require('express');
const app = express();
const port = 3003;
const data = require('../data/reports.json');

app.get('/', (req, res) => {
  res.send('HIMSS coding challenge');
});

app.get('/reports', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
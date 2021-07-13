const express = require('express');
const cors = require('cors');
const app = express();
const port = 3003;
const data = require('../data/reports.json');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('HIMSS coding challenge');
});

app.get('/reports', (req, res) => {
  console.log('return data...')
  res.status(200).json(data);
});

app.put('/reports/:reportId', (req, res) => {
  console.log('report id => ');
  console.log(req.params.reportId);
  console.log('payload => ');
  console.log(req.body);
  res.status(200);
});

app.put('/resource/:resourceId', (req, res) => {
  console.log('resource id => ');
  console.log(req.params.resourceId);
  console.log('payload => ');
  console.log(req.body);
  res.status(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
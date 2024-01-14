const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
const accountRouter = require('./routers/accountRouter');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/accounts', accountRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
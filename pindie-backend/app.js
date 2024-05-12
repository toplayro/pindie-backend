const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRouter = require('./routes/apiRouter');
const pagesRouter = require('./routes/pages')
const cookieParser = require("cookie-parser");

const connectToDatabase = require('./database/connect');
const { cors } = require('./middlewares/cors');

const app = express();
const PORT = 3001;

connectToDatabase();

app.use(
  cors, 
  bodyParser.json(),
  cookieParser(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, 'public')),
);

app.listen(PORT);
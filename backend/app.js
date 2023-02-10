const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/errors');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

//Import all routes
const blog = require('./routes/blog');
const auth = require('./routes/auth');
const newsletter = require('./routes/newsletter');

app.use('/api/v1', blog);
app.use('/api/v1', auth);
app.use('/api/v1', newsletter);
app.use(errorMiddleware);

module.exports = app;

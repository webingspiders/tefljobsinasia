const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/errors');
const cookieParser = require('cookie-parser');
const path = require('path');

app.use(express.json());
app.use(cookieParser());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});
app.use(express.static(path.join(__dirname, '../out')));

//Import all routes
const blog = require('./routes/blog');
const auth = require('./routes/auth');
const newsletter = require('./routes/newsletter');

app.use('/api/v1', blog);
app.use('/api/v1', auth);
app.use('/api/v1', newsletter);
app.use(errorMiddleware);

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../out/index.html'))
})
app.get('/about', (req,res) => {
  res.sendFile(path.join(__dirname, '../out/about.html'))
})
app.get('/contact', (req,res) => {
  res.sendFile(path.join(__dirname, '../out/contact.html'))
})
app.get('/native', (req,res) => {
  res.sendFile(path.join(__dirname, '../out/native.html'))
})
app.get('/non-native', (req,res) => {
  res.sendFile(path.join(__dirname, '../out/non-native.html'))
})

module.exports = app;

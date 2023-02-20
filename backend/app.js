const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/errors');
const cookieParser = require('cookie-parser');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors');
app.use(cors( { credentials: true, origin: 'http://localhost:3000' }));

app.use(bodyParser.json()); 
app.use(express.json());
app.use(cookieParser());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use(express.static(path.join(__dirname, '../out')));
app.use(bodyParser.urlencoded({ extended: true })); 
//Import all routes
const blog = require('./routes/blog');
const auth = require('./routes/auth');
const newsletter = require('./routes/newsletter');
const applicant = require('./routes/applicant');

app.use('/api/v1', blog);
app.use('/api/v1', auth);
app.use('/api/v1', newsletter);
app.use('/api/v1', applicant);
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
app.get('/admin', (req,res) => {
  res.sendFile(path.join(__dirname, '../out/admin.html'))
})
app.get('/admin/dashboard', (req,res) => {
  res.sendFile(path.join(__dirname, '../out/admin/dashboard.html'))
})



module.exports = app;

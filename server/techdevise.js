var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const session = require('express-session');
var flash = require("express-flash");
const fileUpload = require('express-fileupload');

// Routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const apiRouter = require('./routes/api');

var app = express();
require('dotenv').config();

// Middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload());

// Session
app.use(session({
  secret: process.env.SECRET, 
  resave: false,
  saveUninitialized: true,
}));

// Flash messages
app.use(flash());
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});

// View engine setup (only once)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Static files
app.use(express.static(path.join(__dirname, 'public'))); // Admin static files
// app.use('/static', express.static(path.join(__dirname, '../frontend/dist/static'))); // React static files

// API Routes (should come before React catch-all)
app.use('/api', apiRouter);
app.use('/admin', indexRouter);

// React catch-all route (must come AFTER specific routes)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
// });

// Error handlers
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 8006;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
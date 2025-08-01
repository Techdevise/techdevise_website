var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const rateLimit = require('express-rate-limit');
var cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');
var flash = require("express-flash");
const fileUpload = require('express-fileupload');
require('dotenv').config();

var app = express();

// Routers
var indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

// Middleware
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

// View engine setup for Admin Panel
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// CORS config
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : ["https://website.techdevise.com", "https://techdevise.com"];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Helmet for security
app.use(helmet());

// Serve static files (e.g., CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// === ⬇️ Serve React Build from "frontend/build" folder (adjust path as needed) ===
const frontendBuildPath = path.join(__dirname, '../frontend/build');
app.use(express.static(frontendBuildPath));

// Routes
app.use('/api', apiRouter);
app.use('/admin', indexRouter);

// React Catch-All (MUST come after /api and /admin)
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendBuildPath, 'index.html'));
});

// Error Handling
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// Server
const port = process.env.PORT || 8005;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;

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
var indexRouter = require('./routes/index');  // Admin routes
const apiRouter = require('./routes/api');    // API routes

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload());

// Session config
app.use(session({
  secret: process.env.SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

// Flash messages middleware
app.use(flash());
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});


// View engine setup for admin panel (EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// CORS config
// Allowed origins for CORS
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",") 
  : ["https://www.techdevise.com", "https://techdevise.com"];
// const allowedOrigins = process.env.ALLOWED_ORIGINS
//   ? process.env.ALLOWED_ORIGINS.split(",")
//   : ["http://localhost:3003", "http://localhost:3003"];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));

// Security middleware
app.use(helmet());
// Security middleware with updated CSP
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],

      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'",
        "'unsafe-hashes'",
        "https://cdnjs.cloudflare.com",
        "https://cdn.jsdelivr.net",
        "http://gc.kis.v2.scr.kaspersky-labs.com",
        "ws://gc.kis.v2.scr.kaspersky-labs.com"
      ],

      scriptSrcAttr: [
        "'self'",
        "'unsafe-inline'",
        "'unsafe-hashes'",
      ],

      scriptSrcElem: [
        "'self'",
        "'unsafe-inline'",
        "https://cdnjs.cloudflare.com",
        "https://cdn.jsdelivr.net",
        "http://gc.kis.v2.scr.kaspersky-labs.com",
        "ws://gc.kis.v2.scr.kaspersky-labs.com"
      ],

      styleSrc: [
        "'self'",
        "'unsafe-inline'", // allow inline styles
        "https://fonts.googleapis.com",
        "https://cdnjs.cloudflare.com",
        "https://cdn.jsdelivr.net",
        "http://gc.kis.v2.scr.kaspersky-labs.com",
        "ws://gc.kis.v2.scr.kaspersky-labs.com"
      ],

      styleSrcElem: [
        "'self'",
        "'unsafe-inline'",
        "https://fonts.googleapis.com",
        "https://cdnjs.cloudflare.com",
        "https://cdn.jsdelivr.net",
        "http://gc.kis.v2.scr.kaspersky-labs.com",
        "ws://gc.kis.v2.scr.kaspersky-labs.com"
      ],

      imgSrc: ["'self'", "data:", "https:"],

      fontSrc: [
        "'self'",
        "https://fonts.gstatic.com",
        "https://cdnjs.cloudflare.com",
        "https://cdn.jsdelivr.net"
      ],

      connectSrc: ["'self'"],
      frameSrc: ["'self'"],
      objectSrc: ["'none'"],
      baseUri: ["'self'"]
    }
  })
);
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   max: 10,
//   message: "Too many requests, please try again later.",
//   skip: (req) => {
//     // Allow your server IP and localhost
//     const allowedIPs = ['127.0.0.1', '::1', '147.93.102.161']; // Add your server IP
//     return allowedIPs.includes(req.ip);
//   }
// });
// app.use(limiter);
// Serve public static files (if any)
app.use(express.static(path.join(__dirname, 'public')));

// Set correct path for React build
const frontendBuildPath = path.join(__dirname, '../frontend/dist');

// Serve React build static files
app.use(express.static(frontendBuildPath));

// API routes
app.use('/api', apiRouter);

// Admin panel routes
app.use('/admin', indexRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(frontendBuildPath, 'index.html'), function (err) {
    if (err) {
      console.error('Error sending React index.html:', err);
      res.status(err.status).end();
    }
  });
});

// 404 handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error details in development mode
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page with status
  res.status(err.status || 500);
  res.render('error');
});

// Start the server
const port = process.env.PORT || 8015;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;

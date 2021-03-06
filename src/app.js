const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const homeRouter = require('./routes/home');
const loginRouter = require('./routes/login');

const mongoose = require('mongoose');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Routers Setup
app.use('/', indexRouter);
app.use('/home', homeRouter);
app.use('/login', loginRouter);

// DB Configuration ToDo: Enable when choose DB
// mongoose.connect(
//     'mongodb+srv://dac:dac@dac-mongodb-kg1jr.gcp.mongodb.net/crud?retryWrites=true',
//     { useNewUrlParser: true })
// .then(() => console.log('>> Mongo DB connected...'))
// .catch(err => console.error(err));

/**
 * Catch 404 and forward to error handler
 */
app.use((req, res, next) => {
   next(createError(404));
});

/**
 * Error handler
 */
app.use((err, req, res) => {
   // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};

   // render the error page
   res.status(err.status || 500);
   res.render('error');
});

module.exports = app;

const express = require('express');
const path=require('path');
require('./models');

const indexRouter = require('./routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


app.use(function (req, res, next) {
    next(createError(404));
});


app.use(function (err, req, res, next) {
    
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    
    res.status(err.status || 500);
    res.send(err);
});

module.exports = app;

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const MongoClient=require("mongodb").MongoClient;
MongoClient.connect("mongodb+srv://Another-database:Nikan1392@cluster0.dpcjn.mongodb.net/db1?retryWrites=true&w=majority",{
    useUnifiedTopology:true 
})
.then(client=>{
    console.log("Database  is conected");
    const db =client.db("db1");
    app.locals.db=db ;
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

var express = require('express');
var path = require('path');
var routes = require('./config/routes');
var DataLayer = require('./datalayer/DataLayer');

const port = process.env.PORT || 3000;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

DataLayer.initMongoDataLayer().then(()=>{
    app.listen(port);
    console.log(`API Server listening on port ${port}`);
})





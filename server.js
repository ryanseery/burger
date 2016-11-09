var express = require('express');
var bodyParser = require('body-parser');
var method = require('method-override');
var path = require('path');
var routes = require('./controllers/burgers_controllers.js');
var app = epxress();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(express.static('/views/assets/'));
app.use(method('_method'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use('/', routes);

app.listen(PORT, function(){
  console.log('App listening on PORT ' + PORT);
})

var Sequelize = require('sequelize'),
  connection;
if(process.env.JAWSDB_URL) {
  connection = new Sequelize(process.env.JAWSDB_URL);
} else {
  connection = new Sequelize('todo_db', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306'
  })
}
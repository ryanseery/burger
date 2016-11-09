var mysql = require('mysql');
var source = {
  localhost:{
    host: 'localhost',
    user: 'root',
    password: 'Guitar01',
    database: 'burgers_db'
  }
};

var connection = mysql.createConnection(process.env.JAWSDB_URL || source.localhost);
  connection.connect(function (err) {
    if(err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });

  module.exports = connection;
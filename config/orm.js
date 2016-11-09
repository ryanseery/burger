var connection = require('./connection.js');
var orm = {
  selectALL:function(tableName, cb){
    var queryLine = 'SELECT * FROM ';
    queryLine = queryLine + tableName;
    console.log(queryLine);

    connection.query(queryLine, function(err, res){
      if(err) throw err;
      cb(res);
    })
  },
  insertOne:function(tableName, value1, cb){
    var queryLine = 'INSERT INTO ' + tableName + '(burger_name, devoured) VALUES(?,?)';
    connection.query(queryLine,[value1,false], function(err, res){
      if(err) throw err;
      cb(res);
    })
  },
  updateOne:function(tableName, id, cb){
    var queryLine = 'UPDATE ' + tableName;
    queryLine = queryLine + 'SET';
    queryLine = queryLine + 'devoured = true';
    queryLine = queryLine + 'Where id = ' + id;

    connection.query(queryLine, function(err, res) {
      if(err) throw err;
      cb(res);
    })
  }
};

module.exports = orm;
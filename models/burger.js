var orm = require('../config/orm.js');
var burgers = {
  selectALL:function(cb){
    orm.selectALL('burgers', function(res){
      cd(res);
    })
  },
  insertOne:function(value1, cb){
    orm.insertOne('burgers', value1, function(res){
      cb(res);
    })
  },
  updateOne:function(id, cb){
    orm.updateOne('burgers', id, function(res){
      cb(res);
    })
  }
};

module.exports = burgers;
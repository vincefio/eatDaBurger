var connection = require('../config/connection.js')

var orm =  {
  /*selectAll: function(table, cb){
    let query = 'SELECT * FROM ' + table;
    connection.query('SELECT * FROM burgers;', function(err, results, fields){
      if (err) {
        throw err;
      }
      cb(result);
    })
  }*/
  selectAll: function(tableInput, cb) {
  var queryString = "SELECT * FROM " + tableInput + ";";
  connection.query(queryString, function(err, result) {
    if (err) {
      throw err;
    }
    cb(result);
  });
  }
}

module.exports = orm;

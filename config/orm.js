const connection = require('./connection.js')

var orm =  {
  selectAll: function(table, cb){
    let query = 'SELECT * FROM ' + table
    connection.query(query, function(err, results, fields){
      if (err) {
        throw err;
      }
      cb(result);
    })
  }
}

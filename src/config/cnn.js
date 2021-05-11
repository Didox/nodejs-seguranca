var mysql = require('mysql');
var dbURL = 'mysql://root:@localhost/seguranca';

exports.all = function(callback) {
  var connection = mysql.createConnection(dbURL);
  connection.query('SELECT * FROM tasks', function(err, rows) {
    if(err) throw err
    callback(rows, err);
    connection.end();
  });
};
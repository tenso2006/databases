var mysql = require('mysql');
var handler = require('../db');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = function() {
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chat'
  });
  return connection;
};

module.exports = {
  methods: {
    input: function (input) {
      var queryInput = input;
      return queryInput;
    },

    query: function (input, table, column) {
      var newQuery = connection();
      newQuery.connect();
      var array;
      if (table === 'users') {
        array = [input.toString];
        userQuery.query('INSERT INTO ' + table + ' (' + column + ') Values ("' + array + '")', function (err, results) {
          if (err) {
            console.log('INSERT INTO ' + table + ' (' + column + ') Values ("' + array + '")');
          } else {
            console.log('INSERT INTO ' + table + ' (' + column + ') Values ("' + array + '")');
          }
        });
      } else {
        input.forEach(function(input) {
          array.push(input.toString());
        });
        messageQuery.query('INSERT INTO ' + table + ' (' + column + ') Values ("' + array[0] + '","' + array[1] + '""' + array[2] + '")', function (err, results) {
          if (err) {
            console.log('INSERT INTO ' + table + ' (' + column + ') Values ("' + array[0] + '","' + array[1] + '""' + array[2] + '")');
          } else {
            console.log('INSERT INTO ' + table + ' (' + column + ') Values ("' + array[0] + '","' + array[1] + '""' + array[2] + '")');
          }
        });
      }
      newQuery.end();
    }
  }
};


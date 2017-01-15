var mysql = require('mysql');
var handler = require('../db');

var queryInput;

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
      queryInput = input;
      return queryInput;
    },

    query: function (input, table, column) {
      var newQuery = connection();
      newQuery.connect();
      var post  = { user_name: input };
      var array = [];
      array.push(post.user_name.toString());

      newQuery.query('INSERT INTO ' + table + ' (' + column + ') Values ("' + array + '")', function (err, results) {
        if (err) {
          console.log('INSERT INTO ' + table + ' (' + column + ') Values ("' + array + '")');
        } else {
          console.log('INSERT INTO ' + table + ' (' + column + ') Values ("' + array + '")');
          }
      });
      newQuery.end();
    }
  }
};


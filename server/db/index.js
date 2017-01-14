var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
});

connection.connect();

connection.query(new_query, function (err, rows, fields) {
  if (!err) {
    console.log(rows);
  } else {
    console.log(err);
  }
});



connection.end();

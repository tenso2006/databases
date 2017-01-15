var mysql = require('mysql');
var handler = require('../db');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});



connection.connect(function (err){
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection to db established');
});



module.exports.connection = connection;



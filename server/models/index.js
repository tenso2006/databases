var db = require('../db');

module.exports = {
  messages: {

    get: function (res) {
      db.connection.query('SELECT * FROM messages', function (err, result) {
        if (err) {
          console.log('Error in get message query ', error);
        } else {
          if (result.length > 0) {
            res.setHeader('Content-Type', 'application/json');
            res.send(result);
          } else {
            console.log('there are no results');
          }
        }
      });
    },
    // a function which produces all the messages
    post: function (message) {

      db.connection.query('INSERT INTO messages SET ?', message, function (error, results, fields) {
        if (error) {
          throw error;
        } else {
          console.log(results, 'message successfully added to db');
        }
        return;
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      db.connection.query('SELECT * FROM users', function (err, result) {
        if (err) {
          console.log('Error in get users query ', error);
        } else {
          res.json(result);
        }
      });
    },
    post: function (user) {

      db.connection.query('INSERT INTO users SET ?', user, function (error, results, field){
        if (error) {
          throw error;
        } else {
          console.log(user, 'user successfully added to db');
        }
      });
    }
  }
};


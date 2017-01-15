var db = require('../db');

module.exports = {
  messages: {

    get: function (req, res) {
      db.connection.query('SELECT * FROM messages', '', function (err, result) {
        if (err) {
          console.log('Error in get message query ', error);
        } else {
          res.json(result);
        }
      });
    },
    // a function which produces all the messages
    post: function (req, res) {

      var message = {
        id: null,
        message: req.body.message,
        room_name: req.body.roomname,
        user_name: req.body.username,
      };

      db.connection.query('INSERT INTO messages SET ?', message, function (error, results, fields) {
        if (error) {
          throw error;
        } else {
          console.log(message, 'message successfully added to db');
          res.end();
        }

      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      db.connection.query('SELECT * FROM users', '', function (err, result) {
        if (err) {
          console.log('Error in get users query ', error);
        } else {
          res.json(result);
        }
      });
    },
    post: function (req, res) {
      var user = {
        id: null,
        user_name: req.body.username
      };

      db.connection.query('INSERT INTO users SET ?', user, function (error, results, field){
        if (error) {
          throw error;
        } else {
          console.log(user, 'user successfully added to db');
          res.end();
        }
      });
    }
  }
};


var models = require('../models');
var database = require('../db');



module.exports = {
  messages: {

    // a function which handles a get request for all messages
    get: function (req, res) {
      //passing in message to model below
      models.messages.get(res);

    },

    // a function which handles posting a message to the database
    post: function (req, res) {

      var message = {
        id: null,
        message: req.body.message,
        room_name: req.body.roomname,
        user_name: req.body.username,
      };

      if (!message[req.body.message] || !message[req.body.username]) {
        res.writeHead(404, 'not able to post message');
        res.end();
      }
      models.messages.post(message);
      res.end();
    }
  },

  users: {
  // Ditto as above
    get: function (req, res) {
      models.users.get(req, res);
    },

    post: function (req, res) {
      var user = {
        id: null,
        user_name: req.body.username
      };
      if (!req.body.username) {
        res.writeHead(404, 'not able to post user');
        res.end();
      } else {
        //passing user details to user models
        models.users.post(user);
        res.end();
      }
    }
  }
};

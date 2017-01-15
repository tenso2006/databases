var models = require('../models');
var database = require('../db');



module.exports = {
  messages: {

    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get(req, res);
    },

    // a function which handles posting a message to the database
    post: function (req, res) {
      if (!req.body.message || !req.body.username) {
        res.writeHead(404, 'not able to post message');
        res.end();
      } else {
        models.messages.post(req, res);
      }

    }
  },

  users: {
  // Ditto as above
    get: function (req, res) {
      models.users.get(req, res);
    },

    post: function (req, res) {
      if (!req.body.username) {
        res.writeHead(404, 'not able to post user');
        res.end();
      } else {
        models.users.post(req, res);
      }
    }
  }
};

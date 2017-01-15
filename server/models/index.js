var db = require('../db');

module.exports = {
  messages: {
    get: function (res, req) {

      res.status(200).send('response');
    }, // a function which produces all the messages
    post: function (res, req) {
      // var message = req.body.message;
      // console.log('message from models: ', req.body.message);
      res.status(201).send('completed');
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {

      res.status(200).send('response');
    },
    post: function (req, res) {
      var username = req.body.username;

      res.status(201).send('completed');
    }
  }
};


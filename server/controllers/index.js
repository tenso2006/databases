var models = require('../models');
var database = require('../db');



module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      res.status(200).send('response');
    },
    post: function (req, res) {
      var username = req.body.username;
      var roomname = req.body.roomname;
      var message = req.body.message;
      database.methods.query([username,roomname,message], 'messages', 'user_name,room_name,message');
      res.status(201).send('response');
     // a function which handles posting a message to the database
    }
  },

  users: {
  // Ditto as above
    get: function (req, res) {
      res.status(200).send('response');
    },

    post: function (req, res) {
      var username = req.body.username;
      database.methods.query(username, 'users', 'user_name');
      res.status(201).send('response');
    }
  }


};


// exports.sendResponse = function (response, data, statusCode) {
//   statusCode = statusCode || 200;
//   console.log('statusCode: ', statusCode);
//   response.writeHead(statusCode, headers);
//   response.end(JSON.stringify(data));
// };

// var collectData = function (req, callback) {
//   var data = '';
//   request.on('data', function (chunk) {
//     data += chunk;
//   });
//   request.on('end', function () {
//     callback(JSON.parse(data));
//   });
// };

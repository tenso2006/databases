var models = require('../models');


module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      res.status(200).send('response');
    }, 
    post: function (req, res) {
      models.messages.post(req);
      res.status(201).send('completed');
     // a function which handles posting a message to the database
    }
  },

  users: {
  // Ditto as above
    get: function (req, res) {
      res.status(200).send('response');
    },
    post: function (req, res) {
      models.users.post(req);
      res.status(201).send('comnpleted');
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
var models = require('../models');
var data;
var messages = [];

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      console.log('GET');
      exports.sendResponse(response, {result: messages}, 200);
    }, 
    post: function (req, res) {
      exports.collectData(request, function(message) {
        message.id = id;
        id++;
        messages.push(message);
        console.log('POSTED');
        exports.sendResponse(response, {id: message.id}, 201);
      });
     // a function which handles posting a message to the database
    }
  }
};

//   users: {
//     // Ditto as above
//     get: function (req, res) {
     
//       res.send('user get complete');
//     }, 
//     post: function (req, res) {
//       console.log(req.on('data', function (chunk) {
//         console.log(data += chunk);
//       }));
//       res.send('users post called');
//     }
//   }
// }}
// ;

exports.sendResponse = function (response, data, statusCode) {
  statusCode = statusCode || 200;
  console.log('statusCode: ', statusCode);
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data));
};

var collectData = function (request, callback) {
  var data = '';
  request.on('data', function (chunk) {
    data += chunk;
  });
  request.on('end', function () {
    callback(JSON.parse(data));
  });
};
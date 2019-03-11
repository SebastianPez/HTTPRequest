var request = require("request");
var fs = require("fs");

request.get('https://sytantris.github.io/http-examples/future.jpg', function (err, response, body) {

  .on('error', function (err) {
    console.log("Encountered Error code : " + err.statusCode);
  })
  .on('response', function (response) {
    console.log((response.statusCode + response.statusMessage + response.headers['content-type']).join('\n')
  })
})
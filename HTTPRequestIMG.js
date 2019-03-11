var request = require("request");
var fs = require("fs");

request.get('https://sytantris.github.io/http-examples/future.jpg')

  .on('error', function (err) {
    console.log("Encountered Error code : " + err.statusCode);
  })
  .on('response', function (response) {
    console.log("Image info : StatCode: " + response.statusCode + ", StatMessage: " + response.statusMessage + ", ContentType: " + response.headers['content-type']);
  })
  .on('end', function () {
    console.log("Download complete!")
  })
  .pipe(fs.createWriteStream('./future.jpg'));
  console.log("Downloading Image");
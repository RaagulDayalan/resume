var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'GET',
  'hostname': 'iz3h9zwoba.execute-api.ap-south-1.amazonaws.com',
  'path': '/ddos/ddos',
  'headers': {
  },
  'maxRedirects': 20
};
let i = 0
while(i < 200){
var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();
i++;
}
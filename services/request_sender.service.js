
var https = require('https');


function send(requestObj) {
  console.log(requestObj)
  switch (requestObj.method) {
        case 'GET':
         https.get(requestObj.url,function(res){
          var body = "";
          res.on('data', function (data) {
          console.log('data came');
          body += data;
          });
          res.on('end', function () {
          console.log('ended too');
          console.log(body)
          });
          res.on('error', function (e) {
          console.log('Problem with request: ' + e);
          });
      });
        } 
}
module.exports = { send }





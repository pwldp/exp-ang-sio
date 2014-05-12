/*

Express 4 + Angular + Socket.io minimal example application

Dariusz Pawlak <pawlakdp@gmail.com>
2014.05.12

*/

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
  res.sendfile('index.html');
});



app.listen(3000);

//
// EOF
//
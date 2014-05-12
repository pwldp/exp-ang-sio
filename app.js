/*

Express 4 + Angular + Socket.io minimal example application

Dariusz Pawlak <pawlakdp@gmail.com>
2014.05.12

*/

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Express 4 + Angular + Socket.io minimal example application');
});

app.listen(3000);

//
// EOF
//
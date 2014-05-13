/*

Express 4 + Angular + Socket.io minimal example application

Dariusz Pawlak <pawlakdp@gmail.com>
2014.05.12

*/
var http = require('http');
var express = require('express');
var app = express();
var server = app.listen(3000);
var io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/static'));
//
// send index.html
app.get('/', function(req, res){
  res.sendfile('index.html');
});
//
// Socket.io Communication
io.sockets.on('connection', require('./routes/socket'));
//
// EOF
//
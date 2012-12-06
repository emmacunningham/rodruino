var express = require('express');
var serialport = require("serialport");
var SerialPort = serialport.SerialPort; // localize object constructor

var app = express.createServer(express.logger());

var arduino_port = new SerialPort("/dev/tty.usbmodem621", {
  baudrate: 9600,
  parser: serialport.parsers.readline("\n") 
});

arduino_port.on("data", function (data) {
    console.log(data);
});

app.get('/', function(request, response) {
	response.send('Hello World!');
    });

var port = process.env.PORT || 8090;
app.listen(port, function() {
	console.log("Listening on " + port);
});
    
  
var serialPort = require("serialport")
, SerialPort = serialPort.SerialPort
, PORT = "/dev/tty.usbmodem621"
, ps = {
	parser: serialPort.parsers.readline("\n")
}
, util = require('util')
, mokugyo = require('./lib/mokugyo2').mokugyo
, chomp
, sp;

sp = new SerialPort(PORT, ps);

chomp = function(text) {
	return text.replace(/(\n|\r)+$/, '');
};

sp.on("data", function(rawData) {
	var data = chomp(rawData);
	if(data == 'M') {
		
		// Click Mode
		mokugyo.hit();

	} else {
		// Cursor Mode
		// key(data);
	}

});

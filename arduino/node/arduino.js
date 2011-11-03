var serialPort = require("serialport")
, SerialPort = serialPort.SerialPort
, PORT = "/dev/tty.usbmodem411"
, ps = {
	parser: serialPort.parsers.readline("\n")
}
, sp;

sp = new SerialPort(PORT, ps);

sp.on("data", function(data) {
	console.log(data);
	if(data > 200) {
		sp.write('1');
	}
});

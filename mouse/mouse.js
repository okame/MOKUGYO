var serialPort = require("serialport")
, SerialPort = serialPort.SerialPort
, PORT = "/dev/tty.usbmodem621"
, ps = {
	parser: serialPort.parsers.readline("\n")
}
, util = require('util')
, cns = require('./lib/const').cns
, click = require('./lib/click').click
, key = require('./lib/key').key
, poku = require('./lib/poku').poku
, sp
, chomp
, xState = cns.PIV
, yState = cns.PIV
, pokuThs = 3
, pokuCnt = 0
, pokuTime = 1000
, pokuTimer
, pokuTimerBlock = false;

chomp = function(text) {
	return text.replace(/(\n|\r)+$/, '');
};

sp = new SerialPort(PORT, ps);

sp.on("data", function(rawData) {
	var data = chomp(rawData);
	if(data == cns.M) {
		
		// Click Mode
		click();

		// Pokupoku MODE
		pokuCnt++;
		if(pokuCnt >= pokuThs) {
			pokuCnt = 0;
			poku();
		}
		if(!pokuTimerBlock) {
			pokuTimerBlock = true;
			pokuTimer = setTimeout(function(){
					pokuCnt = 0;
					pokuTimerBlock = false
				}, pokuTime);
		}

	} else {
		// Cursor Mode
		key(data);
	}

});

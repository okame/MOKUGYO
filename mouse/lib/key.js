var exec = require('child_process').exec
, cns = require('./const').cns
, xState = cns.PIV
, yState = cns.PIV
, cmd
, key
, dir
, timer
, frameRate = 100
, block = false
, blockTime = 300
, child;

_exec = function(dir) {
	if(!dir) return;
	cmd = 'osascript ./lib/scpt/key_'+dir+'.applescript >& /dev/null';
	return exec(cmd, {timeout: 1000},
		function(error, stdout, stderr) {
			//console.log('stdout: '+(stdout||'none'));
			//console.log('stderr: '+(stderr||'none'));
			//console.log('key');
			if(error !== null) {
				console.log('exec error: '+error);
			}
		}
	)
}

changeState = function(data) {
	if(data == cns.XP) {
		if(xState == cns.PIV) {
			xState = cns.R
		} else if(xState == cns.L) {
			xState = cns.PIV
		}
	} else if(data == cns.XM) {
		if(xState == cns.PIV) {
			xState = cns.L
		} else if(xState == cns.R) {
			xState = cns.PIV
		}
	}

	if(data == cns.YP) {
		if(yState == cns.PIV) {
			yState = cns.U
		} else if(yState == cns.D) {
			yState = cns.PIV
		}
	} else if(data == cns.YM) {
		if(yState == cns.PIV) {
			yState = cns.D
		} else if(yState == cns.U) {
			yState = cns.PIV
		}
	}
}

getState = function() {
	return xState + yState;
}

key = function(data) {
	if(block) return;
	block = true;
	timer = setTimeout(function(){block = false}, blockTime);
	changeState(data)
	dir = getState();
	if(dir) {
		console.log(dir);
	} else {
		console.log('・');
	}
	//if(dir) _exec(dir);
};

setInterval(function(){_exec(dir)}, frameRate);

exports.key = key;

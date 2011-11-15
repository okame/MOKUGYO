/*
 * Q : Quater notes
 * E : Eight notes
 */
var rhythm = {
	QQQ : function(){}
	, QEQ : function(){}
}
, exec = require('child_process').exec;

_exec = function(fileName) {
	cmd = 'osascript ./lib/scpt/'+fileName+'.applescript >& /dev/null';
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

rhythm.QQQ = function() {
	_exec('safari');
}

rhythm.QEQ = function() {
	_exec('itunes');
}

exports.rhythm = rhythm;

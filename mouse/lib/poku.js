var exec = require('child_process').exec
, cmd
, poku
, timer
, block = false
, blockTime = 300
, child;

cmd = 'osascript ./lib/scpt/poku.applescript >& /dev/null';

poku = function() {
	if(block) return;
	block = true;
	timer = setTimeout(function(){block = false}, blockTime);
	return exec(cmd, {timeout: 1000},
		function(error, stdout, stderr) {
			//console.log('stdout: '+(stdout||'none'));
			//console.log('stderr: '+(stderr||'none'));
			//console.log('poku');
			if(error !== null) {
				console.log('exec error: '+error);
			}
		}
	)
};

exports.poku = poku;

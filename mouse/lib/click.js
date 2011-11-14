var exec = require('child_process').exec
, cmd
, click
, timer
, block = false
, blockTime = 300
, child;

cmd = 'cliclick `cliclick -q | sed -e "s/,/ /"`';

click = function() {
	if(block) return;
	block = true;
	timer = setTimeout(function(){block = false}, blockTime);
	return exec(cmd, {timeout: 1000},
		function(error, stdout, stderr) {
			//console.log('stdout: '+(stdout||'none'));
			//console.log('stderr: '+(stderr||'none'));
			console.log('click');
			if(error !== null) {
				console.log('exec error: '+error);
			}
		}
	)
};

exports.click = click;

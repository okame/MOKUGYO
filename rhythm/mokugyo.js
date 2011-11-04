process.stdin.resume();
process.stdin.setEncoding('utf-8');

var mokugyo = {}
, timer
, time = 0
, env = require('./lib/env').env
, pTime
, timeScale = 100
, timeCounter
, melodyQ = [];

mokugyo.timeCounter = function() {
	time += env.TIME_INTERVAL/timeScale;
}

mokugyo.init = function() {
	process.stdin.on('data', function(data){
		var span;

		if(melodyQ.length == 0) {
			timer = setInterval(mokugyo.timeCounter, env.TIME_INTERVAL);
		} else if(melodyQ.length == 1) {
			pTime = time
		}

		span = time - melodyQ[melodyQ.length - 1];
		melodyQ.push(time);
		console.log('span:',span);
		if(span == pTime) {
			console.log('cool');
		}

		console.log(time);
	});
}

mokugyo.init();

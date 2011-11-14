process.stdin.resume();
process.stdin.setEncoding('utf-8');

var mokugyo = {}
, env = require('./lib/env').env
, rhythm = require('./lib/rhythm').rhythm
, timer
, time = 0
, pTime
, timeScale = 100
, timeCounter
, melodyQ = [] // 打木魚時の時間記録キュー
, cmdQ = []; //  打木魚時のコマンド記録キュー

// タイマーイベント
mokugyo.timeCounter = function() {
	time += env.TIME_INTERVAL/timeScale;
}

// 初期化
mokugyo.init = function() {
	process.stdin.on('data', function(data){
		var span
		, cmd;

		melodyQ.push(time);

		// タイマーセット
		if(melodyQ.length == 1) {
			timer = setInterval(mokugyo.timeCounter, env.TIME_INTERVAL);
			return;

		// 基礎音間隔取得
		} else if(melodyQ.length == 2) {
			pTime = time
			console.log('pTime:',pTime);
			return;
		}

		span = time - melodyQ[melodyQ.length - 2];
		console.log('span:',span);

		if(span == pTime) {
			cmdQ.push(env.Q);
			console.log('cool');
		}else if(span == pTime/2) {
			cmdQ.push(env.E);
			console.log('E');
		} else {
			console.log('bad.');
			clearInterval(timer);
		}
		cmd = cmdQ.join('');
		if(rhythm[cmd]) rhythm[cmd]();
	});
}

mokugyo.init();

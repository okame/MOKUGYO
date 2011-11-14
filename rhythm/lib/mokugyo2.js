process.stdin.resume();
process.stdin.setEncoding('utf-8');

var mokugyo = {}
, util = require('util')
, env = require('./env').env
, rhythm = require('./rhythm').rhythm
, timer
, time = 0
, timeCnt = 0
, pTime = 800
, timeScale = 100
, timeCounter
, melodyQ = [] // 打木魚時の時間記録キュー
, cmdQ = []; //  打木魚時のコマンド記録キュー

// タイマーイベント
mokugyo.timeCounter = function() {
	if(melodyQ.length == 0) {
		console.log('・');
		return;
	}
	if(!melodyQ[timeCnt]) {

		if(melodyQ[timeCnt - 1] && melodyQ[timeCnt - 1] == env.E) {
			delete melodyQ[timeCnt - 1];
			cmd = melodyQ.join('');
			if(rhythm[cmd]) {
				rhythm[cmd]();
			} else {
				console.log('Command not found.');
			}
			timeCnt = 0;
			melodyQ = [];
			return;
		}

		melodyQ[timeCnt] = env.E;
	}
	console.log(melodyQ[timeCnt]);
	timeCnt++;

}

mokugyo.hit = function(data){
	var span
	, cmd;

	melodyQ[timeCnt] = env.Q;

	// タイマーセット
	if(!timer) {
		timer = setInterval(mokugyo.timeCounter, pTime);
	}

};

exports.mokugyo = mokugyo;

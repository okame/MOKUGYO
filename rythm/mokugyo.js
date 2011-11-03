process.stdin.resume();
process.stdin.setEncoding('utf-8');

var timer
, TIME_INTERVAL;

process.stdin.on('data', function(data){
	console.log('hoge');
});

process.stdin.on('end', function() {
	console.log('end');
});

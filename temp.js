const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on('line',function(answer) {
	console.log(answer);
	rl.close();
});

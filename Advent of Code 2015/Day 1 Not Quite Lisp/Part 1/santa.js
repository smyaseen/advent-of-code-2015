const fs = require('fs');

//Santa by "(" should go UP 1 floor
//Santa by ")" should go DOWN 1 floor
 
fs.readFile('./santa.txt', (err, data) => {
	console.time("santa");
	if (err) {
		console.log(err);
	}
		const input = data.toString();
		const splitup = input.split('(');
		const splitdown = input.split(')');
		const result = splitup.length - splitdown.length;
		console.log(result);
		console.timeEnd("santa");
})

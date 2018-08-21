const fs = require('fs');

// Santa by "(" should go UP 1 floor
// Santa by ")" should go DOWN 1 floor
 
//At what floor does santa ends up at

function question1() {
 	fs.readFile('./santa.txt', (err, data) => {
 		console.time("q1 = santa-time ");
 		const directions = data.toString();
 		const directionsArray = directions.split('');
 		const answer = directionsArray.reduce((acc, currentValue) => {
 			if (currentValue === '(') {
 				return acc += 1
 			} else if (currentValue === ')') {
 				return acc -= 1
 			}
 			}, 0)
 		console.timeEnd("q1 = santa-time ");
 		console.log('floor: ', answer);
 	})
 } 

 question1()

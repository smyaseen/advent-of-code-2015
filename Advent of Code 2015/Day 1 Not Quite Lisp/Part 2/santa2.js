const fs = require('fs');

// Santa by "(" should go UP 1 floor
// Santa by ")" should go DOWN 1 floor

// When does santa first enter basement

function question2() {
 	fs.readFile('./santa.txt', (err, data) => {
 		console.time("q2 = santa-time ");
 		const directions = data.toString();
 		const directionsArray = directions.split('');
 		let accumulator = 0;
 		let counter = 0;
 		const answer = directionsArray.some((currentItem) => {
 			if (currentItem === '(') {
 				accumulator += 1
 			} else if (currentItem === ')') {
 				accumulator -= 1
 			}
 			counter ++
 			return accumulator < 0;
 			})
 		console.timeEnd("q2 = santa-time ");
 		console.log('basement at: ', counter);
 	})
 } 

 question2()
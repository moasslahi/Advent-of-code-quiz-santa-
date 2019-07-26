// this exercise is good for problem solving practice
// 1 - what floor does santa end uop on
// ( = means go up 1 floor
// ) = means go 1 floor down

const fs = require('fs');


function question1() {
	fs.readFile('./santaquiz.txt', (err,data) => {
		console.time('santatime');

		if (err) {
			console.log(err)
		}
		const direction1 = data.toString();              // first step print out these directions
		const directionarray = direction1.split('');    // then split them into an individuals using an array
		const answer = directionarray.reduce((acc, currenctValue) => {  // the reduce methodd will iterate through the array and have  2 params , first one for the accumulator , second one for current value 
			if (currenctValue === '(') {
				return acc +=1
			} else if (currenctValue === ')') {
				return acc -=1
			}
		},0)
		console.timeEnd('santatime');
		console.log("floor:" , answer);
	})
}

question1();

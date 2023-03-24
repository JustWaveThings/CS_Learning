/* function fibs(number) {
	let output = [0, 1];
	for (let i = 1; i < number; i++) {
		let newNumber = output[i - 1] + output[i];
		output.push(newNumber);
	}
	return output;
} */

// console.log(fibs(8));

// make recursive fibbonacci

function fibsRec(n) {
	if (n === 1) {
		return [0];
	} else if (n === 2) {
		return [0, 1];
	} else {
		let fibs = fibsRec(n - 1);
		fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
		return fibs;
	}
}

console.log(fibsRec(8));

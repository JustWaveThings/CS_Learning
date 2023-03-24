// merge sort recursive algorithm

const inputArray = [7, 3, 5, 2, 4, 6, 1, 0];

function mergeSort(array) {
	if (array.length <= 1) {
		return array;
	} else {
		const midpoint = Math.ceil(array.length / 2);
		return mergeTwoArrays(
			mergeSort(array.slice(0, midpoint)),
			mergeSort(array.slice(midpoint))
		);
	}
}

function mergeTwoArrays(array1, array2) {
	let mergedArray = [];
	let i = 0;
	let j = 0;

	while (i < array1.length && j < array2.length) {
		if (array1[i] < array2[j]) {
			mergedArray.push(array1[i]);
			i++;
		} else {
			mergedArray.push(array2[j]);
			j++;
		}
	}
	return mergedArray.concat(array1.slice(i)).concat(array2.slice(j));
}

console.log(mergeSort(inputArray));

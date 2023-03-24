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

const unsorted1 = [93, 151, 3, 20, 463, 155, 167, 34, 13];
const unsorted2 = [-3, 0, 104, 10456, 4, 790, 90, -90];
const unsorted3 = [10, 4.5, 3.7, 1.1, 0.3, 9.99, 8, 4, 4.7];

console.log(mergeSort(unsorted1)); //[3, 13, 20, 34, 93, 151, 155, 167, 463]
console.log(mergeSort(unsorted2)); //[-90, -3, 0, 4, 90, 104, 790, 10456]
console.log(mergeSort(unsorted3)); //[0.3, 1.1, 3.7, 4, 4.5, 4.7, 8, 9.99, 10]

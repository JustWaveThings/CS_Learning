/* // merge sort recursive algorithm

// pseudocode

// assume an 8 digit array for this pseudocode


level 0  [9, 3, 7, 5, 6, 4, 8, 2]

left side on the way down to the base case

level 1  [9 3 7 5]

level 2  [9 3] [7 5]

level 3  [9] [3]  [7] [5]

left side on the way back up to a sorted left half of input array







level 3     [3 9]  [ 5 7]


mergeSort ( low , high) {

    // base case

    if (array.length = 1) {
        // ready to merge back up

    }

1    if ( low  <  high ){
        find midpoint
        call mergeSort on the low to midpoint

2            if ( low < high )
                find midpoint
                    call mergeSort on low to midpoint

3                        if low < high
                            find midpoint
                                call mergesort on low to mid

}







In the 8 digit array, the 3rd level puts each element in its own array. This is the base case. We should then compare the two left arrays and merge them into a two element array low to high, then compare the two remaining arrays and merge them low to high


if











 */

/*

even more simple trial --- sort 4 elements


function mergeSort(array){

    if array.length = 1 {
        // base case  this is where we start to compare and merge up.. using two way merge?
    }
    if array.length >1
        find midpoint,

        make new array left
        push left half into array
            mergeSort(array)

        make new array right
        push right half into array
            mergeSort(array)

 }

*/

//or the same trial, said a different way

/* const inputArray = [1, 2, 3, 4];

function mergeSort(inputArray) {
	if (inputArray.length === 1) {
		// base case - a single element - return element to merged with nearest neighbor
	} else {
		//      find mipoint of inputArray
		const midpoint = Math.floor(inputArray.length / 2);

		//      make an array that holds both new arrays

		const twoHalves = [
			inputArray.slice(0, midpoint),
			inputArray.slice(midpoint),
		];
		console.log(twoHalves); // [ [ 1, 2 ], [ 3, 4 ] ]

		//    call mergeSort(newArrayLeft)
	}
}

mergeSort(inputArray);
 */

// another iteration

const inputArray = [1, 2, 3, 4];

function mergeSort(inputArray) {
	console.log(inputArray.length, 'inputArray length');
	if (inputArray.length === 1) {
		// base case - a single element - return element to merged with nearest neighbor
		console.log('base case hit');
		return 1;
	} else {
		//      find mipoint of inputArray
		const midpoint = Math.floor(inputArray.length / 2);

		//      make an array that holds both new arrays and make a recursive call

		mergeSort([inputArray.slice(0, midpoint), inputArray.slice(midpoint)]);
	}
}

mergeSort(inputArray);

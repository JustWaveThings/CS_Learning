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

/*

or the same trial, said a different way


function mergeSort(inputArray){

    if inputArray.length === 1 {
        // base case - return element to merge with a merge algorithm
    } else {

        find mipoint of inputArray
        make newArrayLeft
        push 0 to midpoint to newArrrayLeft
        call mergeSort(newArrayLeft)





    }



}


*/

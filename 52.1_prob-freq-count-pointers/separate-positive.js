/** Takes an array of non-zero integers.
 *  Make two pointers, one left, one right.
 *  Loop over all values, always checking the left value for pos/neg:
 *    - if left positive, move left pointer to the right
 *    - if left negative, swap negative val w/ val at rightmost unchecked
 *      idx and check left again on next loop
 *  Loop ends when right index < left index, meaning all values have been
 *   at left idx and moved to correct side (all positive numbers to left
 *   side of the array, negatives to the right side of the array)
 *  End result doesn't need to be sorted. 
 *  Do not create copy of arr, must mutate existing input arr.
 */
function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] > 0) {
            left++;
        } else {
            // swap negative left value to rightmost unchecked value
            [arr[left], arr[right]] = [arr[right], arr[left]];
            right--;
        }
    }
    return arr;
}

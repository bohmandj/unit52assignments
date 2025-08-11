/** Takes array of integers and a target number.
 *  Iterate through the array, adding each to a 'seen' set.
 *  While iterating through, check if target - current num = a number we've seen:
 *    - yes? add 1 to count
 *    - no? add num to seen to check it against future numbers
 *  Return number of pairs that add to the target sum.
 */
function countPairs(arr, target) {
    const seen = new Set();
    let count = 0;

    for (let num of arr) {
        let complement = target - num;
        if (seen.has(complement)) count++;
        seen.add(num);
    }
    return count;
}

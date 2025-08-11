/** Takes an array that MUST be sorted and a target number. 
 *  Returns true if the array contains two numbers that average the target num.
 *  Make two pointers, one "left", one "right" to select numbers to average together.
 *  If average is above target, move right pointer left - if average is below target move left pointer right to get average closer to target.
 *  Function rights when target average is achieved, or pointers cross paths (right val < left val)
 */
function averagePair(arr, targetNum) {
    if (arr.length === 0) return false;
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while (leftIdx < rightIdx) {
        let avg = (arr[leftIdx] + arr[rightIdx]) / 2;
        if (avg === targetNum) return true;
        if (avg > targetNum) rightIdx--;
        if (avg < targetNum) leftIdx++;
    }
    return false;
}

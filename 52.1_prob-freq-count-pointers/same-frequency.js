/** Takes two positive integers.
 *  Return true if both numbers contain the same frequency of digits.
 *  Otherwise return false.
 */
function makeFreqCounter(str) {
    const freqCounter = new Map();
    for (let char of str) {
        freqCounter.set(char, (freqCounter.get(char) || 0) + 1);
    }
    return freqCounter;
}

function sameFrequency(num1, num2) {
    const num1Freq = makeFreqCounter(`${num1}`);
    const num2Freq = makeFreqCounter(`${num2}`);

    // No extra digits on either num
    if (num1Freq.size !== num2Freq.size) return false;
    // Check for match and equal count of each digit
    for (let [digit, count] of num1Freq) {
        if (!num2Freq.has(digit)) return false;
        if (num2Freq.get(digit) !== count) return false;
    }
    return true;
}

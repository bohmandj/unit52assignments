/** Make a freq. counter for each input. 
 *  If any message chars are not found in letters chars, return false. 
 *  If there are not enough chars in letters, return false.
 *  Otherwise return true.
 */

function makeFreqCounter(str) {
    const freqCounter = new Map();
    for (let char of str) {
        freqCounter.set(char, (freqCounter.get(char) || 0) + 1);
    }
    return freqCounter;
}

function constructNote(message, letters) {
    const msgFreqCounter = makeFreqCounter(message);
    const ltrFreqCounter = makeFreqCounter(letters);

    // Check each needed character against available letters
    for (let [char, count] of msgFreqCounter) {
        if (!ltrFreqCounter.has(char)) return false;
        if (ltrFreqCounter.get(char) < count) return false;
    }
    return true;
}

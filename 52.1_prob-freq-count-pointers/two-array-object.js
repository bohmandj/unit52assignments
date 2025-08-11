/** Takes two arrays, one of keys, one of values.
 * Ignore values left over after all keys are assigned a value.
 * Set value to null for any keys left over once all values are used.
 */
function twoArrayObject(keysArr, valuesArr) {
    return keysArr.reduce((obj, key, idx) => {
        obj[key] = idx < valuesArr.length ? valuesArr[idx] : null;
        return obj;
    }, {});
}
